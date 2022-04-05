# MIMO 
# 미인의 모든것 : 가상 메이크업 시뮬레이션 서비스

## 프로젝트 주제 및 선정 배경
"앱에서도 실제 립스틱 제품을 발라볼 순 없을까?"

“하늘 아래 같은 색은 없다” 온라인으로 화장품 구매를 하면서 다양한 색조 화장품을 테스트하고 싶은 20~30대 여성 고객의 니즈를 만족 시키고,  코로나 상황에서 오프라인 매장 제품 테스트에 대한 소비자의 부담을 덜어내기 위해 가상 메이크업 시뮬레이션 서비스를 개발 하게 되었습니다.

웹캠으로 얼굴 사진을 찍은 후, 마음에 드는 립스틱 색상을 선택 하면 가상으로 립스틱을 바른 것처럼 시뮬레이션 해 주는 서비스를 구현 하였습니다. K-POP 및 한류 열풍이 강하게 부는 동남 아시아, 중남미 등 해외의 20-30대 여성까지 소비층을 크게 확장 할 수 있는 매우 높은 시장 가치를 가지고 있는 서비스 입니다.

## 프로젝트 목적
다양한 화장품 브랜드 제품을 테스트하고 싶은 고객의 니즈를 만족 시키고,  코로나 상황에서 오프라인 매장 제품 테스트에 대한 소비자의 부담을 덜어내기 위해 가상 메이크업 시뮬레이션 서비스를 개발 한다. 수업에서 배운 Frontend / Backend / 인공지능 지식을 활용하여 어플리케이션을 구축한다.  


## 프로젝트 목표
1.  웹캠으로 얼굴 사진을 찍은 후, 마음에 드는 립스틱 색상을 선택 하면 가상으로 립스틱을 바른 것처럼 시뮬레이션이 가능하게 한다

2.  기존 시장에 있는 화장품 어플리케이션과 같이 깔끔한 디자인으로 화면을 구성하여 고객의 이목을 끌고 로그인, 장바구니 등의 기능을 구현시킨다. 

3. 제품에 대한 리뷰나 시뮬레이션 결과 사진을 공유함으로써  뷰티 플랫폼으로 확장이 가능한 서비스를 만든다.
![image](https://user-images.githubusercontent.com/97416996/161694455-6ef6535b-04b8-4d4e-bd21-cc993d1cb000.png)


# 프론트앤드 : React V9
# 백앤드 : Firebase
# 모델링 : node.js

# 프로젝트 수행결과 - 모델
## Dataset, 전처리

◾ CelebAMask-HQ 30,000장 얼굴 데이터를 수집 하여 training, test 수행
Input image(사람 얼굴 사진) 별 입술, 머리, 눈썹(왼쪽, 오른쪽), 눈(왼쪽, 오른쪽), 코, 등을 segmentation 한 ground truth 이미지를 함께 수집 함
train, validation , test set 은 7:2:1 비율/원본 이미지와 ground truth 이미지는 U-net으로 train 시킴
![image](https://user-images.githubusercontent.com/97416996/161695063-d12694f0-863b-48a5-9fdb-6cccabf81656.png)


## U-Net
Semantic segmentation은 이미지의 각 픽셀에 해당 클래스에 레이블을 지정하는 분류 작업으로 이를 위해 U-Net을 사용 하였다. U-Net은 Biomedical 분야에서 이미지 분할(Image Segmentation)을 목적으로 제안된 End-to-End 방식의 Fully-Convolutional Network 기반 모델로 자율주행 과 의료 영상 진단 등에 많이 쓰이며 대중적으로 성장했고 다양한 분할 문제에 맞게 조정되고 있다

### U-Net의 장점
* 적은 양의 학습 데이터로도 Data Augmentation을 활용해 여러 Biomedical Image Segmentation 문제에서 우수한 성능을 보임
* 컨텍스트 정보를 잘 사용하면서도 정확히 지역화함
* ![image](https://user-images.githubusercontent.com/97416996/161695249-947c5629-8819-48f8-8bbc-c864ad85bd4e.png)

## 모델 성능 및 개선
### 결과
![image](https://user-images.githubusercontent.com/97416996/161695433-57a140f5-86c6-4437-8122-fcb15e943cbd.png)

### 개선 방안
1. SparseCategoricalCrossentropy→ Dice-Loss 적용
* Dice-Loss 장점: 
임계값을 지정하고, 이진 마스크로 변환 하는 대신 예측과 확률을 직접 사용하여 성능이 우수함 
Dice-Loss 적용 시도 했으나, tensor shape issue로 추후 다시 적용 예정

2. Semantic segmentation 영역 확장 
* 눈 두덩이, 볼 등 얼굴의 다른영역도 semantic seg -mentation 하여 메이크업 시뮬레이션 기능 확장 
 

