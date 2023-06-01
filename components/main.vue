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
              <em>Knigge</em> ist ein Chatbot, programmiert, um über's Reden zu chatten. Er – der Chatbot – bietet ein mechanisches Gegenüber, um für einen selbst Erfahrungen mit und Vorstellungen von gelungener Kommunikation bewusst werden zu lassen.
            </p>
            <p>
              Sein Name geht zurück auf den Schriftsteller Adolph Freiherr von Knigge (1752–1796), der sich in seinem Werk „Über den Umgang mit Menschen“ (kurz auch „der Knigge“ genannt) Gedanken darüber machte, wie ein Miteinander gestaltet werden kann.
            </p>
            <p>
              Gut 150 Jahre später befasste sich der Informatiker Joseph Weizenbaum in der Frühzeit von Computern mit Mensch-Maschine-Kommunikation. 1966 stellte er den Chatbot ELIZA vor, mit dem User:innen in Dialog treten konnten, worauf die Software mittels eines Skripts an Schlüsselworten und Transformationsregeln Antworten generierte. ELIZA gilt als Vorläufer heutiger KI-Software – und <em>Knigge</em> basiert auf dem damals entwickelten Code, allerdings mit einem neuen Skript zur gegenwärtigen Gesprächskultur.
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
              <p>
                <em>Knigge</em>  ist ein Chatbot, programmiert, um über's Reden zu chatten. Er – der Chatbot – bietet ein mechanisches Gegenüber, um für einen selbst Erfahrungen mit und Vorstellungen von gelungener Kommunikation bewusst werden zu lassen.
              </p>
              <p>
                Sein Name geht zurück auf den Schriftsteller Adolph Freiherr von Knigge (1752–1796), der sich in seinem Werk „Über den Umgang mit Menschen“ (kurz auch „der Knigge“ genannt) Gedanken darüber machte, wie ein Miteinander gestaltet werden kann.
              </p>
              <p>
                Gut 150 Jahre später befasste sich der Informatiker Joseph Weizenbaum in der Frühzeit von Computern mit Mensch-Maschine-Kommunikation. 1966 stellte er den Chatbot ELIZA vor, mit dem User:innen in Dialog treten konnten, worauf die Software mittels eines Skripts an Schlüsselworten und Transformationsregeln Antworten generierte. ELIZA gilt als Vorläufer heutiger KI-Software – und <em>Knigge</em> basiert auf dem damals entwickelten Code, allerdings mit einem neuen Skript zur gegenwärtigen Gesprächskultur.
              </p>
            </div>
          </b-col>
        </b-row>
        <!-- <b-row class="about-section-margin">
          <b-col lg="5" offset-lg="6" class="cmpx-0">
            <img src="https://via.placeholder.com/600x400?text=PLACEHOLDER" width="100%">
            <p class="caption-text mt-2 cmpx-10">
              ELIZA in der Ausstellung UNCANNY VALUES im MAK – Museum für angewandte Kunst, 2019
            </p>
          </b-col>
        </b-row> -->
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
              <em>Knigge</em> ist das Resultat des Projekts „<a href="https://islandrabe.com/projekte/zwischenmenschen/" target="_blank">Was ist zwischen den Menschen</a>“, bei dem in verschiedenen Formaten gemeinsam über Zwischenmenschliches nachgedacht wurde. <em>Knigge</em> ist befüllt mit Eindrücken daraus und so gibt er im Gespräch auch einen Einblick in das bisher Gesagte und Gedachte.<br>
            </p>
            <p>
              Die Chats mit <em>Knigge</em> werden in anonymisierter Form aufgezeichnet und fließen ihrerseits wiederum in sein Skript ein: Die Sammlung wächst somit ständig weiter und jeder Dialog wird selbst zum Teil des Gesamtkunstwerks.
            </p>
            <p>
              Im Zentrum steht dabei Kommunikation – die Grundbedingung dafür, dass Menschen gemeinsame Wege finden. Sie ist allgegenwärtig und zugleich selten im Fokus von Beobachtungen, Erfahrungen und Wünschen. <em>Knigge</em> ist hier Sammelnder und Vermittelnder zugleich, dient aber in erster Linie keinem Zweck, denn er hat sich selbst zum Zweck: Das Gespräch mit ihm soll unterhalten, Anregungen bieten und zu Antworten führen, ob und wie wir uns im Kommunizieren wohl fühlen.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="11">
            <div class="about-top-border" />
            <h2 id="datenschutz" class="mb-4">
              Eigener Beitrag und Datenschutz
            </h2>
          </b-col>
        </b-row>
        <b-row class="about-section-margin">
          <b-col lg="9">
            <p>
              <em>Knigge</em> ist die Einladung, gemeinsam ein Werk entstehen zu lassen. Deshalb gestatten Sie hoffentlich die Aufzeichnung Ihres Chatverlaufs mit <em>Knigge</em>. So kann dieses Werk auch über jene Momente, die Sie mit dem Chatbot haben, hinaus wirken, wenn der Chat in Auszügen oder gesamt z.B. im Rahmen einer Ausstellung oder Veröffentlichung präsentiert wird. Weiters kann Ihr Chatverlauf auch als Grundlage dienen, um den Wortschatz von <em>Knigge</em> zu erweitern.
            </p>
            <p>
              Der Code des Chatbots wird lokal auf Ihrem Gerät ausgeführt. Ist die Aufzeichnung des Chats gestattet, werden Ihre eingegebenen Texte mit einem Zeitstempel auf den Server von knigge.chat (Serverstandort ist Deutschland) übertragen und ohne Verbindungsdaten abgespeichert. Damit ist kein Rückschluss darüber möglich, wer von wo mit <em>Knigge</em> gechattet hat. Das bedeutet allerdings auch, dass nachträgliche Löschungen nicht möglich sind. Sollten im Chatverlauf personenbezogene Angaben geschehen, wird im Falle einer Veröffentlichung darauf Rücksicht genommen, diese möglichst zu entfernen.
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
              Was sich für einen digitalen Besuch zu Hintergründen anbietet und Medien berichteten:
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-2 about-section-margin">
          <b-col lg="3">
            <p>HINTERGRÜNDE</p>
          </b-col>
          <b-col lg="8">
            <p>
              <a href="https://www.projekt-gutenberg.org/knigge/umgang/umgang.html"  target="_blank">„Über den Umgang mit Menschen“</a> von Adolph Freiherr von Knigge, 1788 – <em>Projekt Gutenberg</em><br>
              <a href="https://archive.org/details/computerpowerhum0000weiz_v0i3"  target="_blank">„Computer Power and Human Reason. From Judgment to Calculation“</a> von Joseph Weizenbaum, 1976 – <em>Internet Archive</em><br>
              <a href="https://sites.google.com/view/elizagen-org/the-original-eliza" target="_blank">Code zu ELIZA von Joseph Weizenbaum</a> aus dem Jahr 1966 mit weiterführenden Informationen – <em>Jeff Shrager; MIT Libraries</em><br>
              <a href="https://academic.oup.com/mind/article-pdf/LIX/236/433/9866119/433.pdf"  target="_blank">„Computing Machinery and Intelligence“</a> von Alan Turing, 1950 – <em>Mind, A quarterly review of Psychology and Philosophy</em><br>
              <a href="media/melanie_haberl-mit_vergnuegen.pdf" target="_blank">Mit Vergnügen: Das „gute“ Gespräch als Spiel. Unterhaltung durch und mit Chatbots</a> von Melanie Haberl, 2023<br>
              <a href="https://github.com/StudioProcess/eliza-js" target="_blank">Code für Knigge auf Basis von ELIZA</a> mit Dokumentation auf Github – <em>Process Studio</em><br>
              <a href="https://islandrabe.com/projekte/zwischenmenschen/" target="_blank">Projektseite „Was ist zwischen den Menschen“</a> – <em>islandrabe</em><br>
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col lg="3">
            <p>MEDIEN</p>
          </b-col>
          <b-col lg="8">
            <p>
              <a href="media/2022_04_09-tt.pdf" target="_blank">"Chatten übers Reden"</a>, <em>Tiroler Tageszeitung (09.04.2022)</em><br>
              <a href="media/2022_04_21-krone.pdf" target="_blank">"Menschliche und unmenschliche Kommunikation"</a>, <em>Tiroler Kronenzeitung (21.04.2022)</em><br>
              <a href="https://www.meinbezirk.at/kufstein/c-lokales/kufsteiner-medienkuenstler-untersucht-kommunikation_a5304952" target="_blank">"Kufsteiner Medienkünstler untersucht Kommunikation"</a>, <em>meinbezirk.at (27.04.2022)</em><br>
              <a href="media/2022_04_27-kufsteinblick.pdf" target="_blank">"Chatbot Knigge: Ein 'gutes' Gespräch als Kunst"</a>, <em>Kufsteinblick (27.04.2022)</em><br>
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
              Im Informationszeitalter über Kommunikation zu reden, scheint uns sinnvoll:
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-2 about-section-margin">
          <b-col lg="2">
            <p>TEAM</p>
          </b-col>
          <b-col lg="7">
            <p>
              <em>Alex Erler</em> (Projektbegleitung)<br>
              Baut zurzeit im Neuwirt in Wattens ein Kultur- und Gemeinschaftshaus auf, das Menschen ins gemeinsame Tun und Reden bringt. <a href="https://neuwirt-wattens.at" target="_blank">neuwirt-wattens.at</a>
            </p>
            <p>
              <em>Martin Grödl</em> &amp; <em>Moritz Resl</em> (Programmierung und Gestaltung) mit <a href="https://www.laurentlang.com" target="_blank"><em>Laurent Lang</em></a> (Webentwicklung)<br>
              Entwickeln generatives und interaktives Design als <a href="https://process.studio" target="_blank">Process – Studio for Art and Design</a>.
            </p>
            <p>
              <em>Melanie Haberl</em> (Kommunikation und Vermittlung)<br>
              Studiert Europäische Ethnologie an der Universität Wien und geht im Moment der Frage nach, was zwischen Menschen und Bildschirmen ist.
            </p>
            <p class="mb-0">
              <em>Richard Schwarz</em> (Konzept und Script)<br>
              Tätig in den Feldern Medienkunst und Kulturwissenschaft. Lebt und werkt in Kufstein. <a href="https://islandrabe.com" target="_blank">islandrabe.com</a>
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-2 about-section-margin" style="padding:1em">
          <b-col lg="5" class="cmpx-0" style="max-width:330px">
            <img src="Landeslogo_Transparent_schwarz.png" width="100%">
            <p class="cmpx-10 caption-text mt-2">
              Gefördert vom Land Tirol – Covid-19 Soforthilfefonds Kultur – Kunst und Kultur im digitalen Raum
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
              Für alles rund um das Chatten über’s Reden:
            </p>
            <p><a href="mailto:brief@knigge.chat" rel="nofollow">brief@knigge.chat</a></p>
          </b-col>
        </b-row>
      </b-container>
    </aside>
    <!-- RECORDING INFO -->
    <div v-if="!presentation && recordingPopoverVisible" id="recording-indicator-info">
      <p><em>Achtung, Kunst!</em></p>
      <p>Zentral für das Werk <em>Knigge</em> sind die Gespräche, die hier zwischen Mensch und Maschine entstehen. Deshalb sendet die Website Ihre eingegebenen Texte ohne Hinweis auf Ihre Identität an den Server; mehr dazu unter <a href="#datenschutz" @click="showAbout = true">„Eigener Beitrag und Datenschutz“</a>. Die Aufzeichnung können Sie mittels <span class="recording-active">&#9679;</span>/<span class="recording-inactive">&#9679;</span> auch jederzeit aus- und einschalten.</p>

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
        // this.startUserInteractionTimer() // don't start timer immediately (without interaction)
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
        if (this.userHasSentFirstMessage) {
          // only log recording on/off, if user has sent at least one message
          this.createLog('RECORDING ' + (this.isRecording ? 'ON' : 'OFF'), 'system', true)
        }
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
        this.isRecording = this.$props.presentation ? true : (this.$cookie.get('knigge_rec') && this.$cookie.get('knigge_rec') === 'false' ? false : true)
      }).catch((error) => {
        if (error.response) {
          // eslint-disable-next-line
          console.log(error.response.status)
        }
      })
    },
    // Log message
    async createLog (message, origin, force = false) {
      if ((this.isRecording || force) && this.loggerSessionToken.length && message) {
        let prefix = ''
        if (origin === 'bot') {
          prefix = 'bot: '
        } else if (origin === 'user') {
          prefix = 'you: '
        }
        let url = `${this.apiUrl}/log?session=${this.loggerSessionToken}&message=${encodeURIComponent(prefix + message)}`
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
