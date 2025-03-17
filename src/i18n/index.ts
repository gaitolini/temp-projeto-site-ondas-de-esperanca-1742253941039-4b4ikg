import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        mission: 'Our Mission',
        contact: 'Contact'
      },
      hero: {
        slogan: 'Preserving Oceans, Empowering Lives',
        donate: 'Donate Now'
      },
      mission: {
        title: 'Our Mission',
        oceanCleanup: {
          title: 'Ocean Cleanup',
          description: 'We organize regular beach cleanups and work with local communities to reduce plastic pollution in our oceans.'
        },
        education: {
          title: 'Community Education',
          description: 'Empowering coastal communities through environmental education and sustainable fishing practices.'
        },
        conservation: {
          title: 'Marine Conservation',
          description: 'Protecting marine ecosystems and endangered species through research and conservation programs.'
        }
      },
      contact: {
        title: 'Get in Touch',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        follow: 'Follow Us',
        support: 'Support our cause'
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: 'Início',
        mission: 'Nossa Missão',
        contact: 'Contato'
      },
      hero: {
        slogan: 'Preservando Oceanos, Capacitando Vidas',
        donate: 'Doe Agora'
      },
      mission: {
        title: 'Nossa Missão',
        oceanCleanup: {
          title: 'Limpeza dos Oceanos',
          description: 'Organizamos limpezas regulares de praias e trabalhamos com comunidades locais para reduzir a poluição plástica em nossos oceanos.'
        },
        education: {
          title: 'Educação Comunitária',
          description: 'Capacitando comunidades costeiras através da educação ambiental e práticas de pesca sustentável.'
        },
        conservation: {
          title: 'Conservação Marinha',
          description: 'Protegendo ecossistemas marinhos e espécies ameaçadas através de programas de pesquisa e conservação.'
        }
      },
      contact: {
        title: 'Entre em Contato',
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        follow: 'Siga-nos',
        support: 'Apoie nossa causa'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;