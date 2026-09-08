/* ==========================================================================
   LEARN TOUCH TYPING ENGINE & AUTOMATIC FINGER HIGHLIGHTER
   ========================================================================== */

// किस अक्षर के लिए कौन सा गोला (Finger Dot) और कौन सी Key जलेगी
const FINGER_MAPPING = {
    // Left Hand (L5 = Little, L4 = Ring, L3 = Middle, L2 = Index, L1 = Thumb)
    'q': { finger: 'f-L5', key: 'q' },
    'a': { finger: 'f-L5', key: 'a' },
    'z': { finger: 'f-L5', key: 'z' },
    'w': { finger: 'f-L4', key: 'w' },
    's': { finger: 'f-L4', key: 's' },
    'x': { finger: 'f-L4', key: 'x' },
    'e': { finger: 'f-L3', key: 'e' },
    'd': { finger: 'f-L3', key: 'd' },
    'c': { finger: 'f-L3', key: 'c' },
    'r': { finger: 'f-L2', key: 'r' },
    'f': { finger: 'f-L2', key: 'f' },
    'v': { finger: 'f-L2', key: 'v' },
    't': { finger: 'f-L2', key: 't' },
    'g': { finger: 'f-L2', key: 'g' },
    'b': { finger: 'f-L2', key: 'b' },

    // Right Hand (R1 = Thumb, R2 = Index, R3 = Middle, R4 = Ring, R5 = Little)
    'y': { finger: 'f-R2', key: 'y' },
    'h': { finger: 'f-R2', key: 'h' },
    'n': { finger: 'f-R2', key: 'n' },
    'u': { finger: 'f-R2', key: 'u' },
    'j': { finger: 'f-R2', key: 'j' },
    'm': { finger: 'f-R2', key: 'm' },
    'i': { finger: 'f-R3', key: 'i' },
    'k': { finger: 'f-R3', key: 'k' },
    ',': { finger: 'f-R3', key: ',' },
    'o': { finger: 'f-R4', key: 'o' },
    'l': { finger: 'f-R4', key: 'l' },
    '.': { finger: 'f-R4', key: '.' },
    'p': { finger: 'f-R5', key: 'p' },
    ';': { finger: 'f-R5', key: ';' },

    // Spacebar -> Thumbs (Default Right Thumb)
    ' ': { finger: 'f-R1', key: ' ' }
};

// अभ्यास के लिए शुरुआती लेसन्स (Home Row, Top Row, etc.)
const LEARN_LESSONS = [
    "asdf jkl; asdf jkl; fads jlk; asdf jkl;",
    "qwer uiop qwer uiop rewq poiu qwer uiop",
    "zxcv m,./ zxcv m,./ vcxz /.,m zxcv m,./"
];

let learnState = {
    currentLessonIndex: 0,
    currentText: "",
    pointer: 0
};

function initLearnTypingEngine() {
    const hiddenInput = document.getElementById('learn-hidden-input');
    const displayPanel = document.querySelector('.learn-display-panel');
    if (!hiddenInput || !displayPanel) return;

    // क्लिक करने पर इनपुट पर ऑटोमैटिक फोकस हो जाए
    displayPanel.addEventListener('click', () => {
        hiddenInput.focus();
        document.getElementById('learn-focus-hint').style.display = 'none';
    });

    learnState.currentText = LEARN_LESSONS[0];
    learnState.pointer = 0;
    renderLearnTarget();

    hiddenInput.addEventListener('input', (e) => {
        const val = e.target.value;
        const expectedChar = learnState.currentText[learnState.pointer];

        if (val.length > 0) {
            const entered = val[val.length - 1];
            if (entered.toLowerCase() === expectedChar.toLowerCase()) {
                AudioNodeEngine.trigger('correct');
                learnState.pointer++;

                if (learnState.pointer >= learnState.currentText.length) {
                    executeCelebrationMatrix();
                    showToast("Lesson Complete! Next lesson loaded.");
                    learnState.currentLessonIndex = (learnState.currentLessonIndex + 1) % LEARN_LESSONS.length;
                    learnState.currentText = LEARN_LESSONS[learnState.currentLessonIndex];
                    learnState.pointer = 0;
                }
                renderLearnTarget();
            } else {
                AudioNodeEngine.trigger('wrong');
            }
            hiddenInput.value = ""; // इनपुट बॉक्स को हमेशा साफ़ रखें
        }
    });
}

function renderLearnTarget() {
    const targetChar = learnState.currentText[learnState.pointer] || "";
    const targetDisplay = document.getElementById('learn-char-target');
    const streamDisplay = document.getElementById('learn-word-stream');

    if (targetDisplay) {
        targetDisplay.textContent = targetChar === ' ' ? 'SPACE' : targetChar.toUpperCase();
    }
    if (streamDisplay) {
        streamDisplay.textContent = learnState.currentText.substring(learnState.pointer);
    }

    // सारे गोलों और कीबोर्ड कीज़ को रीसेट करें
    document.querySelectorAll('.finger-dot').forEach(d => d.classList.remove('active'));
    document.querySelectorAll('.virtual-keyboard .key').forEach(k => k.classList.remove('active'));

    // सही उंगली के गोले और कीबोर्ड की को एक्टिव (लाल/हाइलाइट) करें
    const mapping = FINGER_MAPPING[targetChar.toLowerCase()];
    if (mapping) {
        const activeDot = document.getElementById(mapping.finger);
        if (activeDot) activeDot.classList.add('active');

        const activeKey = document.querySelector(`.virtual-keyboard .key[data-key="${mapping.key}"]`);
        if (activeKey) activeKey.classList.add('active');
    }
}

// पेज लोड होने पर इसे भी इनिशियलाइज़ करें
document.addEventListener('DOMContentLoaded', () => {
    initLearnTypingEngine();
});