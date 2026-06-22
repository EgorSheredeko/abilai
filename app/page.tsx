import React from 'react';

export default function Home() {
  const phoneNumber = '7707270398'; 
  const message = encodeURIComponent('Абылай, саған ресми ескерту жіберілді. Түсініктеме беруіңді талап етемін.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        {/* Статус уведомления */}
        <div style={styles.badge}>
          РЕФ. № КЗ-2026 / РЕСМИ ЕСКЕРТУ • ОФИЦИАЛЬНОЕ УВЕДОМЛЕНИЕ
        </div>

        <h1 style={styles.title}>Сотқа дейінгі ескерту</h1>
        <h2 style={styles.subtitle}>Досудебное предупреждение</h2>
        
        <p style={styles.attention}>Азамат Абылайдың назарына / Вниманию гражданина Абылая</p>

        {/* БЛОК НА КАЗАХСКОМ ЯЗЫКЕ */}
        <div style={styles.legalBoxKz}>
          <p style={styles.legalText}>
            <strong>ҚАЗАҚША НҰСҚАСЫ:</strong> <br />
            Сіздің тарапыңыздан <strong>+7 (707) 270-39-88</strong> абоненттік нөмірі арқылы бейтаныс адамдарға қатысты негізсіз қоқан-лоқы көрсету, әдепсіз мінез-құлық таныту, сондай-ақ деструктивті мақсатта әдейі тілдік кедергі жасау фактілері тіркелді.
          </p>
          <p style={styles.legalText}>
            ҚР Қылмыстық кодексінің 115-бабына (Қорқыту) сәйкес келетін кез келген әрекеттер, сондай-ақ тұлғааралық жанжалдарды ушықтыруға бағытталған қадамдар заңмен белгіленген тәртіпте құжатталып, Қазақстан Республикасының құқық қорғау органдарына сотқа дейінгі тексеру жүргізу үшін берілуі мүмкін.
          </p>
          <p style={styles.legalText}>
            Заңсыз әрекеттеріңізді тоқтатыңыз, бейтаныс азаматтармен сөйлескенде сөздеріңізге жауап беріңіз және тек заң шеңберінде әрекет етіңіз. Келесі кезең — ресми арыз жазу.
          </p>
        </div>

        {/* БЛОК НА РУССКОМ ЯЗЫКЕ */}
        <div style={styles.legalBoxRu}>
          <p style={styles.legalText}>
            <strong>РУССКАЯ ВЕРСИЯ:</strong> <br />
            Со стороны абонента <strong>+7 (707) 270-39-88</strong> зафиксированы материалы, содержащие необоснованные угрозы, признаки неэтичного поведения, а также умышленные попытки создания языкового барьера в деструктивных целях.
          </p>
          <p style={styles.legalText}>
            Настоящим уведомляем: любые действия, подпадающие под признаки ст. 115 УК РК (Угроза), фиксируются и могут быть переданы в правоохранительные органы РК для проведения досудебной проверки. Прекратите неправомерные действия и фильтруйте речь.
          </p>
        </div>

        <p style={styles.description}>
          Инцидентті реттеу және түсініктеме беру үшін қорғалған байланыс арнасын пайдаланыңыз. <br />
          <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>Для урегулирования инцидента используйте защищенный канал связи.</span>
        </p>

        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={styles.button}
        >
          Түсініктеме беру / Предоставить разъяснения (WhatsApp)
        </a>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#070a13', // Холодный темный фон
    fontFamily: 'Courier New, Courier, monospace, sans-serif',
    padding: '20px',
  },
  main: {
    padding: '2.5rem 2rem',
    borderRadius: '0px', 
    backgroundColor: '#0f1423', 
    border: '1px solid #1f2937',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#111827',
    color: '#6b7280',
    border: '1px solid #374151',
    padding: '6px 12px',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    marginBottom: '2rem',
    width: '100%',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '1.6rem',
    color: '#ffffff',
    fontWeight: '700',
    textTransform: 'uppercase',
    margin: '0 0 0.2rem 0',
  },
  subtitle: {
    fontSize: '1.3rem',
    color: '#9ca3af',
    fontWeight: '500',
    textTransform: 'uppercase',
    margin: '0 0 1rem 0',
  },
  attention: {
    fontSize: '0.85rem',
    color: '#e5e7eb',
    marginBottom: '1.5rem',
    fontWeight: 'bold',
    backgroundColor: '#1e293b',
    padding: '6px',
  },
  legalBoxKz: {
    backgroundColor: '#111827',
    borderLeft: '4px solid #4b5563',
    padding: '1.2rem',
    textAlign: 'left',
    marginBottom: '1rem',
  },
  legalBoxRu: {
    backgroundColor: '#111827',
    borderLeft: '4px solid #374151',
    padding: '1.2rem',
    textAlign: 'left',
    marginBottom: '2rem',
  },
  legalText: {
    fontSize: '0.85rem',
    color: '#9ca3af',
    lineHeight: '1.5',
    margin: '0 0 0.8rem 0',
  },
  description: {
    fontSize: '0.85rem',
    color: '#4b5563',
    marginBottom: '2rem',
    lineHeight: '1.5',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f2937', 
    border: '1px solid #4b5563',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '1.2rem 1.5rem',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    width: '100%',
    boxSizing: 'border-box',
  }
};