// --- 1. HTMLの部品（要素）を取得 ---
const questionAudio = document.getElementById('question-audio');
const playButton = document.getElementById('play-button');
const checkButton = document.getElementById('check-button');
const userInput = document.getElementById('user-input');
const resultArea = document.getElementById('result-area');

// --- 2. 新しい10問の問題リストを作成 ---
// --- 2. 新しい10問の問題リストを作成 ---
const problems = [
    { audioFile: 'A1_1.mp3', answer: '이거 얼마예요?' },
    { audioFile: 'A1_2.mp3', answer: '메뉴판 좀 주세요.' },
    { audioFile: 'A1_3.mp3', answer: '화장실이 어디예요?' },
    { audioFile: 'A1_4.mp3', answer: '이걸로 주세요.' },
    { audioFile: 'A1_5.mp3', answer: '정말 맛있어요.' },
    { audioFile: 'A1_6.mp3', answer: '사진 찍어주세요.' },
    { audioFile: 'A1_7.mp3', answer: '카드 돼요?' },
    { audioFile: 'A1_8.mp3', answer: '영수증 주세요.' },
    { audioFile: 'A1_9.mp3', answer: '물이 필요해요.' },
    { audioFile: 'A1_10.mp3', answer: '너무 예뻐요.' }
];

// --- 3. 現在の問題を管理するための変数を準備 ---
let currentProblem = null;

// --- 4. 新しい問題をセットアップする関数 ---
function setupNewProblem() {
    // 結果表示と入力欄をクリアする
    resultArea.textContent = '';
    userInput.value = '';

    // 0から9までのランダムな数字を生成
    const problemIndex = Math.floor(Math.random() * problems.length);
    // ランダムに選ばれた問題を現在の問題として設定
    currentProblem = problems[problemIndex];

    // 音声プレーヤーに、選ばれた問題の音声ファイルを設定
    questionAudio.src = currentProblem.audioFile;
}

// --- 5. ボタンが押された時の処理 ---

// 「音声を再生」ボタン
playButton.addEventListener('click', () => {
    // 音声が設定されていなければ再生しない
    if (questionAudio.src) {
        questionAudio.play();
    }
});

// 「答え合わせ」ボタン
checkButton.addEventListener('click', () => {
    // 問題がセットされていなければ何もしない
    if (!currentProblem) {
        return;
    }

    const userText = userInput.value;
    const correctAnswer = currentProblem.answer;

    // 前後の空白を取り除いてから比較する
    if (userText.trim() === correctAnswer) {
        resultArea.textContent = '素晴らしい！正解です！ 🎉 ページを更新して次の問題に挑戦しましょう！';
        resultArea.style.color = 'green';
    } else {
        resultArea.textContent = '残念！もう一度挑戦してみましょう。';
        resultArea.style.color = 'red';
    }
});

// --- 6. 最初にアクセスした時に、最初の問題をセットアップする ---
setupNewProblem();

// --- ハンバーガーメニューの機能 ---
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // メニューの表示/非表示を切り替える
        nav.classList.toggle('nav-active');

        // リンクにアニメーションを適用
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // ハンバーガーボタンをX印に切り替える
        burger.classList.toggle('toggle');
    });
}

// 関数を実行
navSlide();