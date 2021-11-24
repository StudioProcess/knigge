<template>
  <div v-if="loaded" class="app-wrapper">
    <!-- HEADER -->
    <header role="navigation">
      <b-container fluid="xxl">
        <b-row>
          <b-col>
            <button @click="scrollToTop">
              <img src="knigge_icon.svg" height="39">
            </button>
          </b-col>
          <b-col class="text-center">
            <button
              v-if="!presentation"
              id="recording-indicator"
              :class="isRecording ? 'active' : 'inactive'"
              @click="toggleRecordingState()"
            />
          </b-col>
          <b-col class="text-right">
            <button v-if="!presentation" @click="showAbout = true">
              <img src="info_icon.svg" height="39">
            </button>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <!-- MAIN -->
    <section id="chat">
      <b-container fluid="xxl">
        <b-row>
          <b-col>
            <div class="chat-window">
              <div style="height:10px" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div class="fadeout-border" />
    <section id="chat-controls">
      <b-container fluid="xxl">
        <b-row>
          <b-col class="text-right pr-0">
            <input
              v-model="chatInput"
              type="text"
              :disabled="chatEnded"
              maxlength="1000"
              @focus="inputFocus()"
              @blur="inputBlur()"
              @keyup.enter="sendUserMessage()"
            >
          </b-col>
          <b-col cols="auto" class="pl-0">
            <button v-if="chatEnded" class="chat-action-btn" @click="restartChat()">
              <img src="restart_icon_blue.svg" height="100%">
            </button>
            <button v-else-if="!userAllowedToChat" class="chat-action-btn" disabled>
              <img src="send_icon_disabled.svg" height="100%">
            </button>
            <button v-else class="chat-action-btn" @click="sendUserMessage()">
              <img src="send_icon_black.svg" height="100%">
            </button>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- ABOUT OVERLAY -->
    <aside id="about" :class="showAbout ? 'about-active': ''">
      <div class="about-close-wrapper">
        <b-container fluid="xxl">
          <b-row>
            <b-col class="text-right">
              <button class="about-close" @click="showAbout = false">
                <img src="close_icon_circle.svg" height="39">
              </button>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <b-container fluid="xxl">
        <b-row>
          <b-col class="text-center pt-5 pb-5">
            <h1>Über das Projekt</h1>
          </b-col>
        </b-row>
        <b-row class="d-none d-lg-flex about-section-margin bg-website-lighter">
          <b-col lg="3" class="text-center px-8 px-lg-4 py-3">
            <img src="knigge_icon.svg" width="100%" style="max-width:350px">
          </b-col>
          <b-col lg="8" class="py-3">
            <h2 class="mb-4">
              Wer ist Knigge?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla arcu, cursus id tellus vitae, aliquam egestas erat. Nunc malesuada eu ipsum nec finibus. Integer posuere nisi erat, sed ornare leo aliquet non. Phasellus scelerisque elit eu felis finibus, non rhoncus ante venenatis. Sed sodales scelerisque tempor. Vivamus ut lorem vel arcu vehicula blandit eget ut ipsum. Donec mattis malesuada lacinia. Cras vel dapibus ipsum. Suspendisse potenti. Praesent a nisi augue. Aenean et accumsan lectus. Duis aliquam lobortis enim, non porttitor ipsum rhoncus ut. Donec in fringilla ligula, sed congue massa.
            </p>
          </b-col>
        </b-row>
        <b-row class="d-block d-lg-none">
          <b-col class="text-center px-6 pt-2 pb-4">
            <img src="knigge_icon.svg" width="100%" style="max-width:350px">
          </b-col>
        </b-row>
        <b-row class="d-block d-lg-none about-section-margin">
          <b-col>
            <div class="bg-website-lighter py-3 px-3">
              <h2 class="mb-4">
                Wer ist Knigge?
              </h2>
              <p class="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla arcu, cursus id tellus vitae, aliquam egestas erat. Nunc malesuada eu ipsum nec finibus. Integer posuere nisi erat, sed ornare leo aliquet non. Phasellus scelerisque elit eu felis finibus, non rhoncus ante venenatis. Sed sodales scelerisque tempor. Vivamus ut lorem vel arcu vehicula blandit eget ut ipsum. Donec mattis malesuada lacinia. Cras vel dapibus ipsum. Suspendisse potenti. Praesent a nisi augue. Aenean et accumsan lectus. Duis aliquam lobortis enim, non porttitor ipsum rhoncus ut. Donec in fringilla ligula, sed congue massa.
              </p>
            </div>
          </b-col>
        </b-row>
        <b-row class="about-section-margin">
          <b-col lg="5" offset-lg="6" class="cmpx-0">
            <img src="https://via.placeholder.com/600x400?text=PLACEHOLDER" width="100%">
            <p class="caption-text mt-2 cmpx-10">
              ELIZA in der Ausstellung UNCANNY VALUES im MAK – Museum für angewandte Kunst, 2019
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="11">
            <div class="about-top-border" />
            <h2 class="mb-4">
              Warum mit Knigge plaudern?
            </h2>
          </b-col>
        </b-row>
        <b-row class="about-section-margin">
          <b-col lg="9">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla arcu, cursus id tellus vitae, aliquam egestas erat. Nunc malesuada eu ipsum nec finibus. Integer posuere nisi erat, sed ornare leo aliquet non. Phasellus scelerisque elit eu felis finibus, non rhoncus ante venenatis. Sed sodales scelerisque tempor. Vivamus ut lorem vel arcu vehicula blandit eget ut ipsum. Donec mattis malesuada lacinia. Cras vel dapibus ipsum. Suspendisse potenti. Praesent a nisi augue. Aenean et accumsan lectus. Duis aliquam lobortis enim, non porttitor ipsum rhoncus ut. Donec in fringilla ligula, sed congue massa.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="11">
            <div class="about-top-border" />
            <h2 class="mb-4">
              Datenschutz
            </h2>
          </b-col>
        </b-row>
        <b-row class="about-section-margin">
          <b-col lg="9">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla arcu, cursus id tellus vitae, aliquam egestas erat. Nunc malesuada eu ipsum nec finibus. Integer posuere nisi erat, sed ornare leo aliquet non. Phasellus scelerisque elit eu felis finibus, non rhoncus ante venenatis. Sed sodales scelerisque tempor. Vivamus ut lorem vel arcu vehicula blandit eget ut ipsum. Donec mattis malesuada lacinia. Cras vel dapibus ipsum. Suspendisse potenti. Praesent a nisi augue. Aenean et accumsan lectus. Duis aliquam lobortis enim, non porttitor ipsum rhoncus ut. Donec in fringilla ligula, sed congue massa.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="11">
            <div class="about-top-border" />
            <h2 class="mb-4">
              Weiterführendes
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="9">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col lg="3">
            <p>PRESSE</p>
          </b-col>
          <b-col lg="8">
            <p>
              <a href="#">"Schaut euch diesen Gesprächspartner an"</a> – <em>Der Standard</em><br>
              <a href="#">"Ich unterhalte mich gerne – mit Computern"</a> – <em>Die Zeit</em><br>
              <a href="#">"Schaut euch diesen Gesprächspartner an"</a> – <em>Kurier</em><br>
              <a href="#">"Ich unterhalte mich gerne – mit Computern. Aber auch mit Menschen"</a> – <em>Falter</em>
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-2 about-section-margin">
          <b-col lg="3">
            <p>HINTERGRUND</p>
          </b-col>
          <b-col lg="8">
            <p>
              <a href="#">Adolph Freiherr Knigge</a> – <em>Wikipedia</em><br>
              <a href="#">Was sind Chatbots?</a> – <em>Wikipedia</em><br>
              <a href="#">Erster Chatbot gewinnt Goldene Nica</a> – <em>Ars Electronica</em><br>
              <a href="#">Über's Reden reden</a> – <em>Kulturverein</em><br>
              <a href="#">Computer Conversations (1965)</a> – <em>MIT Archiv</em><br>
              <a href="#">Adolph Freiherr Knigge</a> – <em>Wikipedia</em><br>
              <a href="#">Was sind Chatbots?</a> – <em>Wikipedia</em><br>
              <a href="#">Erster Chatbot gewinnt Goldene Nica</a> – <em>Ars Electronica</em><br>
              <a href="#">Über's Reden reden</a> – <em>Kulturverein</em><br>
              <a href="#">Computer Conversations (1965)</a> – <em>MIT Archiv</em>
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="11">
            <div class="about-top-border" />
            <h2 class="mb-4">
              Beteiligte
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="9">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla arcu, cursus id tellus vitae, aliquam egestas erat. Nunc malesuada eu ipsum nec finibus. Integer posuere nisi erat, sed ornare leo aliquet non. Phasellus scelerisque.
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-2 about-section-margin">
          <b-col lg="2">
            <p>TEAM</p>
          </b-col>
          <b-col lg="7">
            <p>Kathi Musterfrau<br>Lorem ipsum dolor sit amet.</p>
            <p>Max Mustermann<br>Nunc malesuada eu ipsum nec finibus.</p>
            <p>Max Mustermann<br>Integer posuere nisi erat, sed ornare leo aliquet non.</p>
            <p class="mb-0">
              Max Mustermann<br>Donec nulla arcu, cursus id tellus vitae.
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-2 about-section-margin">
          <b-col lg="5" class="cmpx-0">
            <img src="https://via.placeholder.com/600x400?text=PLACEHOLDER" width="100%">
            <p class="cmpx-10 caption-text mt-2">
              ELIZA in der Ausstellung UNCANNY VALUES im MAK – Museum für angewandte Kunst, 2019
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="11">
            <div class="about-top-border" />
            <h2 class="mb-4">
              Kontakt
            </h2>
          </b-col>
        </b-row>
        <b-row class="about-section-margin">
          <b-col lg="9">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>Kathi Musterfrau, <a href="mailto:kathi@kniggeprojekt.at" rel="nofollow">kathi@kniggeprojekt.at</a></p>
          </b-col>
        </b-row>
      </b-container>
    </aside>
    <!-- RECORDING INFO -->
    <div v-if="!presentation && recordingPopoverVisible" id="recording-indicator-info">
      <p><em>Bevor es losgeht...</em></p>
      <p>Wir möchten deine Eingaben gerne aufzeichnen. Solltest du damit nicht einverstanden sein, kannst du jederzeit auf den <span class="recording-active">&#9679;</span> roten Kreis klicken. Sobald sich die Farbe von <span class="recording-active">&#9679;</span> rot auf <span class="recording-inactive">&#9679;</span> grau verändert hat, ist die Aufnahme gestoppt.</p>
      <p class="mb-0">
        Vielen Dank und viel Spaß!
      </p>
      <button class="popover-close" @click="recordingPopoverVisible = false; setRecordingStateCookie(isRecording)">
        <img src="close_icon.svg" height="28">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    presentation: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      // General
      loaded: false,
      chatEnded: false,
      showAbout: false,
      isMobile: false,
      // Chatbot
      chatInput: '',
      botTypingSpeed: [12, 18], // in characters per second
      botMaxTypingTime: 6,
      botResponseDelay: [1, 3], // delay before bot is starting to respond (ie. typing indicator is show)
      botInitialMessages: [],
      userAllowedToChat: false,
      userHasSentFirstMessage: false,
      // Logger
      apiUrl: process.env.apiUrl,
      loggerSessionToken: '',
      loggerSessionExpired: false,
      recordingPopoverVisible: true,
      isRecording: false,
      isRecordingCookieExpiration: 2,
      userInteractionEventListeners: ['mousedown', 'mouseover', 'touchstart', 'scroll', 'keydown', 'visibilitychange'],
      noUserInteractionTimeout: 10000, // presentation mode: time since last user interaction before chat reset (in ms)
      lastUserInteractionTimer: undefined,
      lastUserInteractionElapsedTime: 0
    }
  },
  watch: {
    lastUserInteractionElapsedTime (val) {
      if (val > this.noUserInteractionTimeout) {
        this.stopUserInteractionTimer()
        this.restartChat()
      }
    }
  },
  async mounted () {
    this.loaded = true
    this.recordingPopoverVisible = !this.$cookie.get('knigge_rec')
    this.isMobile = document.querySelector('body').classList.contains('mobile-browser')
    this.$nextTick(function () {
      if (!this.isMobile) {
        document.querySelector('input').focus()
      }
    })
    await this.getLoggerSession()
    await this.getInitialMessages()
  },
  destroyed () {
    if (this.$props.presentation) {
      this.stopUserInteractionTimer()
      this.stopListeningForUserInteraction()
    }
    this.$eliza.reset()
  },
  methods: {
    // === CHAT METHODS ===
    // Load script
    async loadScript () {
      const response = await fetch('example.mjs')
      this.chatScript = await response.text()
    },
    // Get initial chatbot messages
    async getInitialMessages () {
      if (this.$props.presentation) {
        this.stopUserInteractionTimer()
        this.stopListeningForUserInteraction()
      }
      const initialMessagesCount = this.$eliza.get_options().fixed_initial + 1
      await this.timeout(1000)
      for (let i = 0; i < initialMessagesCount; i++) {
        if (i > 0) {
          await this.timeoutSecs(this.botResponseDelay) // add delay before a typing indicator is shown
        }
        this.showMessage('', 'bot')
        const message = this.$eliza.get_initial()
        await this.typingTimeout(message, this.botTypingSpeed, this.botMaxTypingTime)
        this.botInitialMessages.push('bot: ' + message)
        this.replaceTypingIndicatorByMessage(message)
      }
      if (this.$props.presentation) {
        this.startUserInteractionTimer()
        this.startListeningForUserInteraction()
      }
      this.userAllowedToChat = true
    },
    // Get final chatbot messages
    async getFinalMessages () {
      const finalMessagesCount = this.$eliza.get_options().fixed_final
      for (let i = 0; i < finalMessagesCount; i++) {
        await this.timeoutSecs(this.botResponseDelay) // add delay before a typing indicator is shown
        this.showMessage('', 'bot')
        const message = await this.$eliza.get_final()
        await this.typingTimeout(message, this.botTypingSpeed, this.botMaxTypingTime)
        await this.createLog(message, 'bot')
        this.replaceTypingIndicatorByMessage(message)
      }
    },
    // Get chatbot reply
    async getReply (userMessage) {
      this.userAllowedToChat = false
      await this.timeoutSecs(this.botResponseDelay) // add delay before a typing indicator is shown
      this.showMessage('', 'bot')
      const reply = this.$eliza.transform(userMessage)
      await this.typingTimeout(reply, this.botTypingSpeed, this.botMaxTypingTime)
      await this.createLog(reply, 'bot')
      this.replaceTypingIndicatorByMessage(reply)
      // Check if the last message ends the conversation
      if (this.$eliza.is_quit()) {
        await this.getFinalMessages()
        this.chatInput = ''
        document.querySelector('input').disabled = true
        this.chatEnded = true
        if (this.$props.presentation) {
          this.stopUserInteractionTimer()
          this.stopListeningForUserInteraction()
          await this.timeout(5000)
          this.restartChat()
        } else {
          document.querySelector('input').classList.add('placeholder-blue')
          document.querySelector('input').placeholder = window.innerWidth > 767 ? 'Gespräch beendet. Klicken für Neustart →' : 'Gespräch beendet. Neustart →'
        }
      } else {
        this.userAllowedToChat = true
      }
    },
    // Add new message to chat window
    showMessage (message, origin) {
      const chatWindow = document.querySelector('.chat-window')
      const newMessage = document.createElement('div')
      newMessage.classList.add('message', `message-${origin}`)
      if (origin === 'bot') {
        const typingIndicator = document.createElement('img')
        typingIndicator.src = 'typing-indicator.svg'
        newMessage.append(typingIndicator)
      } else {
        if (!message.replace(/\s/g, '').length) {
          const messageLength = message.length
          message = ''
          for (let i = 0; i < messageLength; i++) {
            message += '&nbsp;'
          }
        }
        const newMessageParagraph = document.createElement('p')
        newMessageParagraph.innerHTML = message
        newMessage.append(newMessageParagraph)
      }
      chatWindow.append(newMessage)
      this.scrollToLastMessage()
    },
    // Replace typing indicator by message
    replaceTypingIndicatorByMessage (message) {
      const lastMessage = document.querySelector('.chat-window').lastChild
      if (lastMessage) {
        lastMessage.removeChild(lastMessage.firstChild)
        const newMessageParagraph = document.createElement('p')
        newMessageParagraph.innerHTML = message
        lastMessage.append(newMessageParagraph)
        this.scrollToLastMessage()
      }
    },
    // Send user message
    async sendUserMessage () {
      const userMessage = this.chatInput
      if (userMessage && this.userAllowedToChat) {
        if (this.userHasSentFirstMessage) {
          await this.createLog(userMessage, 'user')
        } else {
          await this.createLog(this.botInitialMessages.concat('you: ' + userMessage))
          this.userHasSentFirstMessage = true
          this.botInitialMessages = []
        }
        this.showMessage(userMessage, 'user')
        this.chatInput = ''
        if (!this.chatEnded) {
          await this.getReply(userMessage)
        }
      }
    },
    // Restart chat
    async restartChat () {
      this.chatInput = ''
      document.querySelector('input').placeholder = ''
      document.querySelector('input').className = ''
      this.clearChat()
      this.userAllowedToChat = false
      this.chatEnded = false
      this.$eliza.reset()
      await this.getLoggerSession()
      await this.getInitialMessages()
    },
    // Clear chat
    clearChat () {
      const chatWindow = document.querySelector('.chat-window')
      if (chatWindow) {
        while (chatWindow.firstChild) {
          chatWindow.removeChild(chatWindow.lastChild)
        }
      }
    },
    // === LOGGING METHODS ===
    // Toggle recording state
    toggleRecordingState () {
      if (!this.recordingPopoverVisible && this.loggerSessionToken.length) {
        this.isRecording = !this.isRecording
        this.setRecordingStateCookie(this.isRecording)
      }
    },
    // Set recording state cookie
    setRecordingStateCookie (val) {
      this.$cookie.set('knigge_rec', val, this.isRecordingCookieExpiration)
    },
    // Get session token
    async getLoggerSession () {
      await this.$axios.$get(`${this.apiUrl}/session`).then((response) => {
        this.loggerSessionToken = response.session
        // eslint-disable-next-line
        this.isRecording = this.$cookie.get('knigge_rec') && this.$cookie.get('knigge_rec') === 'false' ? false : true
      }).catch((error) => {
        if (error.response) {
          // eslint-disable-next-line
          console.log(error.response.status)
        }
      })
    },
    // Log message
    async createLog (message, origin) {
      if (this.isRecording && this.loggerSessionToken.length && message) {
        let url = `${this.apiUrl}/log?session=${this.loggerSessionToken}&message=${encodeURIComponent((origin === 'bot' ? 'bot: ' : 'you: ') + message)}`
        if (Array.isArray(message)) {
          url = `${this.apiUrl}/log?session=${this.loggerSessionToken}&messages=${JSON.stringify(message)}`
        }
        await this.$axios.$get(url).catch((error) => {
          if (error.response && error.response.status === 403) {
            this.loggerSessionExpired = true
            this.chatEnded = true
            document.querySelector('input').classList.add('placeholder-blue')
            document.querySelector('input').placeholder = window.innerWidth > 767 ? 'Session abgelaufen. Klicken für Neustart →' : 'Session abgelaufen. Neustart →'
          }
        })
      }
    },
    // User interaction timer (for presentation mode)
    startListeningForUserInteraction () {
      this.userInteractionEventListeners.forEach(x => document.addEventListener(x, this.resetUserInteractionTimer))
    },
    stopListeningForUserInteraction () {
      this.userInteractionEventListeners.forEach(x => document.removeEventListener(x, this.resetUserInteractionTimer))
    },
    startUserInteractionTimer () {
      this.lastUserInteractionTimer = setInterval(() => {
        this.lastUserInteractionElapsedTime += 1000
      }, 1000)
    },
    stopUserInteractionTimer () {
      clearInterval(this.lastUserInteractionTimer)
      this.lastUserInteractionElapsedTime = 0
    },
    resetUserInteractionTimer () {
      this.stopUserInteractionTimer()
      this.startUserInteractionTimer()
    },
    // === UTILITY METHODS ===
    // Timeout as promise
    timeout (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    timeoutSecs (secs) {
      if (Array.isArray(secs)) {
        secs = secs[0] + Math.random() * (secs[1] - secs[0])
      }
      return this.timeout(secs * 1000)
    },
    typingTimeout (message, typingSpeed = 1, maxTimeout = 6) {
      if (Array.isArray(typingSpeed)) {
        typingSpeed = typingSpeed[0] + Math.random() * (typingSpeed[1] - typingSpeed[0])
      }
      const secs = Math.min(message.length / typingSpeed, maxTimeout)
      return this.timeout(secs * 1000)
    },
    // Scroll to top (only chat history container)
    scrollToTop () {
      const firstMessage = document.querySelector('.chat-window').firstChild
      if (firstMessage) {
        firstMessage.scrollIntoView({ behavior: 'smooth' })
      }
    },
    // Scroll to last message
    scrollToLastMessage () {
      const lastMessage = document.querySelector('.chat-window').lastChild
      if (this.isMobile) {
        lastMessage.scrollIntoView()
        window.scrollTo(0, 0)
      } else {
        lastMessage.scrollIntoView({ behavior: 'smooth' })
      }
    },
    // On input focus
    inputFocus () {
      if (this.isMobile) {
        document.body.classList.add('keyboard')
        const lastMessage = document.querySelector('.chat-window').lastChild
        setTimeout(function () {
          if (lastMessage) {
            lastMessage.scrollIntoView({ block: 'end' })
          }
          window.scrollTo(0, 0)
        }, 200)
      }
    },
    // On input blur
    inputBlur () {
      if (this.isMobile) {
        document.body.classList.remove('keyboard')
      }
    }
  }
}
</script>
