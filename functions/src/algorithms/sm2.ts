export interface SM2State {
  repetitions: number
  efactor: number
  interval: number
  nextReviewDate: Date
}

export function calculateSM2(quality: number, state: SM2State): SM2State {
  const { repetitions, efactor, interval } = state
  let nextRep: number
  let nextInterval: number

  if (quality >= 3) {
    if (repetitions === 0) nextInterval = 1
    else if (repetitions === 1) nextInterval = 6
    else nextInterval = Math.round(interval * efactor)
    nextRep = repetitions + 1
  } else {
    nextRep = 0
    nextInterval = 1
  }

  let nextEF = efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  nextEF = Math.max(1.3, parseFloat(nextEF.toFixed(2)))

  const nextReviewDate = new Date()
  nextReviewDate.setDate(nextReviewDate.getDate() + nextInterval)

  return { repetitions: nextRep, efactor: nextEF, interval: nextInterval, nextReviewDate }
}
