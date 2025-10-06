<!-- 在原有AI聊天部分的基础上，添加以下交互功能 -->

<section class="ai-chat-section">
    <div class="ai-chat-header">
        <i class="fas fa-robot ai-icon"></i>
        <h2>宫灯知识助手</h2>
    </div>

    <div class="chat-container" id="chatContainer">
        <div class="message bot-message">
            您好！我是宫灯知识助手，可以回答关于藁藁藁藁城宫灯的历史、工艺和文化等方面的问题。请问您想了解什么？
        </div>
        <div class="message bot-message">
            您可以直接输入问题，或者点击下方快捷按钮：
        </div>
        <div class="quick-questions">
            <button class="quick-question-btn" data-question="宫灯的历史渊源">历史渊源</button>
            <button class="quick-question-btn" data-question="宫灯的制作工艺">制作工艺</button>
            <button class="quick-question-btn" data-question="宫灯的种类">主要种类</button>
            <button class="quick-question-btn" data-question="宫灯的文化意义">文化意义</button>
        </div>
    </div>

    <div class="chat-input">
        <input type="text" id="userInput" placeholder="输入您关于宫灯的问题...">
        <button id="sendButton"><i class="fas fa-paper-plane"></i></button>
    </div>
    
    <!-- 新增功能区域 -->
    <div class="ai-features">
        <button id="voiceInputBtn" title="语音输入"><i class="fas fa-microphone"></i></button>
        <button id="clearChatBtn" title="清空对话"><i class="fas fa-trash-alt"></i></button>
        <button id="shareChatBtn" title="分享对话"><i class="fas fa-share-alt"></i></button>
    </div>
</section>

<style>
    /* 新增样式 */
    .quick-questions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 10px 0;
    }
    
    .quick-question-btn {
        background-color: #f0f0f0;
        border: 1px solid #ddd;
        border-radius: 15px;
        padding: 5px 12px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    .quick-question-btn:hover {
        background-color: var(--primary-red);
        color: white;
        border-color: var(--primary-red);
    }
    
    .ai-features {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 10px;
    }
    
    .ai-features button {
        background: none;
        border: none;
        color: var(--dark-red);
        font-size: 1.2rem;
        cursor: pointer;
        transition: color 0.3s;
    }
    
    .ai-features button:hover {
        color: var(--primary-red);
    }
    
    /* 语音输入动画 */
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    .listening {
        animation: pulse 1s infinite;
        color: var(--primary-red) !important;
    }
</style>

<script>
    // 扩展知识库
    const knowledgeBase = {
        "历史": {
            answer: "藁藁藁藁城宫灯制作历史可追溯至东汉时期，由纱罩灯衍变而来。相传光武帝刘秀的皇后郭圣通是藁藁藁藁城人，入宫后将家乡的手艺人组织起来，建立各种手工作坊，所制产品专供宫内及军营所用，其中灯笼作坊就在屯头村。",
            followUp: ["起源时间", "历史传说", "发展历程"]
        },
        "工艺": {
            answer: "传统藁藁藁藁城宫灯都是手工制作，共有56道工序，包括挖竹篾篾篾篾、洗竹竿、钻座眼儿等。从造型上看，藁藁藁藁城宫灯有三个特点：上盖下托、镂空装饰、穗坠（流苏）。",
            followUp: ["制作材料", "关键工序", "工具使用"]
        },
        "种类": {
            answer: "藁藁藁藁城宫灯已发展到工艺纸雕宫灯、传统宫灯、大型电动宫灯三大系列，300多个品种，包括红纱灯、木雕宫灯、走马灯、工艺纸雕宫灯等。",
            followUp: ["红纱灯特点", "电动宫灯", "创新品种"]
        },
        "文化": {
            answer: "2007年，藁藁藁藁城宫灯被列入河北省非物质文化遗产名录。曾参与1997年香港回归、2008年北京奥运会、2010年上海世博会、2022年北京冬奥会等重大活动。",
            followUp: ["非遗保护", "重大活动", "象征意义"]
        },
        "产业": {
            answer: "屯头村被称为'中国宫灯第一村'，年产量突破1亿对，年产值20亿元，产品行销全国各地，且出口俄罗斯、韩国、日本等十余个国家和地区。",
            followUp: ["生产规模", "销售市场", "经济效益"]
        }
    };

    // 获取新增DOM元素
    const quickQuestionBtns = document.querySelectorAll('.quick-question-btn');
    const voiceInputBtn = document.getElementById('voiceInputBtn');
    const clearChatBtn = document.getElementById('clearChatBtn');
    const shareChatBtn = document.getElementById('shareChatBtn');

    // 添加快捷问题按钮事件
    quickQuestionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            userInput.value = question;
            sendMessage();
        });
    });

    // 语音输入功能
    voiceInputBtn.addEventListener('click', function() {
        if (!('webkitSpeechRecognition' in window)) {
            addMessage("您的浏览器不支持语音输入功能，请使用Chrome或Edge浏览器。", 'bot-message');
            return;
        }

        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'zh-CN';
        
        this.classList.add('listening');
        addMessage("正在聆听...请说出您的问题", 'bot-message');
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            userInput.value = transcript;
            voiceInputBtn.classList.remove('listening');
            sendMessage();
        };
        
        recognition.onerror = function() {
            addMessage("语音识别失败，请重试或直接输入问题。", 'bot-message');
            voiceInputBtn.classList.remove('listening');
        };
        
        recognition.start();
    });

    // 清空对话
    clearChatBtn.addEventListener('click', function() {
        if (confirm("确定要清空当前对话吗？")) {
            chatContainer.innerHTML = `
                <div class="message bot-message">
                    您好！我是宫灯知识助手，可以回答关于藁藁藁藁城宫灯的历史、工艺和文化等方面的问题。请问您想了解什么？
                </div>
                <div class="message bot-message">
                    您可以直接输入问题，或者点击下方快捷按钮：
                </div>
                <div class="quick-questions">
                    <button class="quick-question-btn" data-question="宫灯的历史渊源">历史渊源</button>
                    <button class="quick-question-btn" data-question="宫灯的制作工艺">制作工艺</button>
                    <button class="quick-question-btn" data-question="宫灯的种类">主要种类</button>
                    <button class="quick-question-btn" data-question="宫灯的文化意义">文化意义</button>
                </div>
            `;
            
            // 重新绑定快捷按钮事件
            document.querySelectorAll('.quick-question-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const question = this.getAttribute('data-question');
                    userInput.value = question;
                    sendMessage();
                });
            });
        }
    });

    // 分享对话
    shareChatBtn.addEventListener('click', function() {
        const chatText = Array.from(chatContainer.querySelectorAll('.message'))
            .map(msg => {
                const isBot = msg.classList.contains('bot-message');
                return `${isBot ? '宫灯助手' : '您'}: ${msg.textContent}`;
            })
            .join('\n\n');
        
        if (navigator.share) {
            navigator.share({
                title: '我的宫灯知识问答',
                text: chatText,
                url: window.location.href
            }).catch(err => {
                console.log('分享失败:', err);
                copyToClipboard(chatText);
            });
        } else {
            copyToClipboard(chatText);
        }
    });

    // 复制到剪贴板
    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert("对话内容已复制到剪贴板，您可以粘贴分享！");
    }

    // 改进的获取回答函数
    function getAnswer(question) {
        // 关键词匹配
        const keywords = Object.keys(knowledgeBase);
        const matchedKeyword = keywords.find(keyword => question.includes(keyword));
        
        if (matchedKeyword && knowledgeBase[matchedKeyword]) {
            const response = knowledgeBase[matchedKeyword];
            let answer = response.answer;
            
            // 添加追问建议
            if (response.followUp && response.followUp.length > 0) {
                answer += "\n\n您可能还想了解：";
                answer += response.followUp.map(item => 
                    `<span class="follow-up" data-question="${matchedKeyword}的${item}">${item}</span>`
                ).join(" · ");
            }
            
            return answer;
        }
        
        return "抱歉，我暂时无法回答这个问题。您可以尝试询问关于宫灯的历史、工艺、种类、产业或文化方面的问题。";
    }

    // 处理追问点击
    chatContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('follow-up')) {
            const question = e.target.getAttribute('data-question');
            userInput.value = question;
            sendMessage();
        }
    });
</script>



