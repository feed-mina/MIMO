# MIMO — easy-guide 쉬운 업데이트 설명

한국시간 2026년 9월 18~19일 업데이트 보고서. 활동 집계 마감은 9월 19일 21:24:15입니다.

화장품 목록·리뷰·카메라 시뮬레이션을 다루는 프런트엔드입니다. 이번에는 인수인계 문서와 화면편집기 연결 예제가 서로 다른 브랜치에 추가됐습니다.

| 항목 | 기준 |
|---|---|
| 보고서 범위 | 이번 기간의 변경과 관련 기능. 전체 시스템 설명은 아래 기존 상세 문서로 연결합니다. |
| 확인 브랜치 | main + update-readme + PR #2 작업 브랜치 |
| 소스 기준 | `1ebd7114c480` / main `fedf905d07bd` |
| 검증 범위 | 두 브랜치의 커밋과 PR 대상, 리뷰 폼·목록·API 코드를 정적으로 대조했습니다. |
| 보고서 세트 | [쉬운 설명](easy-guide.md) · [수정·검증 지시](fix-guide.md) · [코드 인수인계](screen-code-handover.md) |

## 이번에 달라진 것

- 9월 19일 11:14, PR #3의 인수인계 문서가 update-readme에 병합됐습니다.
- 9월 19일 20:54, PR #4의 쉬운 가이드·개발 가이드·상품 카드 manifest가 main에 병합됐습니다.
- 9월 18일 PR #2는 README 참조 오류 수정을 별도 작업 브랜치에 병합했습니다. 이를 main 반영으로 집계하지 않습니다.

## 1. 용어와 원리

| 용어 | 쉬운 뜻과 이번 작업에서의 역할 |
|---|---|
| Branch (브랜치) | 같은 저장소 안의 작업 갈래입니다. 문서가 어느 갈래에 있는지 확인해야 합니다. |
| Manifest (구성 명세) | 화면편집기가 읽는 화면 요소 목록입니다. 실제 상품 서버를 만드는 파일은 아닙니다. |
| API (Application Programming Interface, 요청·응답 창구) | 화면이 상품·리뷰·이미지 처리 결과를 받는 연결 지점입니다. |

## 2. 익숙한 상황에 빗대어 보기

같은 가게의 안내판이 두 서랍에 나뉘어 있는 상태입니다. update-readme에는 기존 가게의 사용 설명서, main에는 새 진열대를 만드는 설계 예제가 있습니다. 이번 보고서는 두 서랍을 정확한 링크로 연결합니다.

이 비유는 역할을 이해하기 위한 설명입니다. 실제 저장·승인·실행 조건은 코드 인수인계 보고서를 기준으로 확인합니다.

## 3. 서로 어떻게 연결되는가

상품 카드 예제를 편집기로 가져오는 일과 기존 Firebase 데이터·카메라 서버를 연결하는 일은 별개입니다. 리뷰 폼이 저장을 요청해도 리뷰 목록은 예시 자료를 읽는 경로가 남아 있어 목록 갱신을 별도로 연결해야 합니다.

| 산출물 | 읽고 판단할 일 |
|---|---|
| easy-guide | 무엇이 달라졌고 어디까지 가능한지 이해 |
| fix-guide | 리뷰 저장 형식과 목록 갱신 경로 맞추기 |
| screen-code-handover | 화면·함수·입력·출력·저장 위치를 따라 유지보수 |

## 4. 직접 확인하는 순서

1. 아래 main 연동 안내와 update-readme 인수인계 링크를 각각 엽니다. 성공 기준: 브랜치와 문서 목적이 구분됩니다.
2. 상품 카드 예제를 가져올 때 화면만 표시되는지 확인합니다. 성공 기준: 서버 저장 완료로 오해하지 않습니다.
3. 리뷰 변경은 분리된 테스트 환경에서 저장과 다시 읽기를 한 묶음으로 확인합니다. 실패하면 요청 본문 형식과 목록의 자료 출처를 먼저 봅니다.

## 확인한 활동

| 한국시간 | 커밋 | 기록된 작업 | 구분 |
|---|---|---|---|
| 09/19 11:14 | [1ebd711](https://github.com/feed-mina/MIMO/commit/1ebd7114c480a2917bff4c99e455a3150e2963da) | Merge pull request #3 from feed-mina/copilot/screen-code-handover | 병합 기록 |
| 09/19 11:08 | [71ff493](https://github.com/feed-mina/MIMO/commit/71ff493ff7eb8959650254503972f050e9148101) | docs: add visual handover draft | 변경 기록 |
| 09/19 20:54 | [fedf905](https://github.com/feed-mina/MIMO/commit/fedf905d07bd16cc1c9ed1e3779d3d21363582d2) | docs: MIMO SDUI 연동 가이드와 샘플 게시 (#4) | main 변경 |

커밋은 파일 변경 기록이고 병합은 작업 브랜치를 합친 기록입니다. 둘을 별개의 기능 수로 세지 않습니다. 에이전트가 작성한 커밋도 사용자 저장소의 작업으로 포함했습니다.

## 기존 상세 자료

- [update-readme 인수인계](https://github.com/feed-mina/MIMO/blob/1ebd7114c480a2917bff4c99e455a3150e2963da/docs/handover/maintenance-handover.md)
- [main SDUI 연결 안내](https://github.com/feed-mina/MIMO/blob/main/docs/sdui-guides/2026-09-19/README.md)
- [README 오류 수정 PR #2](https://github.com/feed-mina/MIMO/pull/2)
