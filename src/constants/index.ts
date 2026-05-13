export const APP_NAME = 'AlgoVoca'

export const STUDY_WORD_COUNT = 10

export const JOB_ROLES = [
  { value: 'frontend', label: '프론트엔드 개발자' },
  { value: 'backend', label: '백엔드 개발자' },
  { value: 'devops', label: 'DevOps / 인프라 엔지니어' },
  { value: 'fullstack', label: '풀스택 개발자' },
  { value: 'other', label: '기타' },
] as const

export const FIREBASE_AUTH_ERRORS: Record<string, string> = {
  'auth/email-already-in-use': '이미 사용 중인 이메일입니다.',
  'auth/invalid-email': '올바른 이메일 형식이 아닙니다.',
  'auth/weak-password': '비밀번호는 6자 이상이어야 합니다.',
  'auth/user-not-found': '이메일 또는 비밀번호가 틀렸습니다.',
  'auth/wrong-password': '이메일 또는 비밀번호가 틀렸습니다.',
  'auth/invalid-credential': '이메일 또는 비밀번호가 틀렸습니다.',
  'auth/too-many-requests': '잠시 후 다시 시도해주세요.',
  'auth/popup-closed-by-user': '로그인이 취소되었습니다.',
  'auth/cancelled-popup-request': '로그인이 취소되었습니다.',
  'auth/account-exists-with-different-credential': '이미 다른 방법으로 가입된 이메일입니다.',
}
