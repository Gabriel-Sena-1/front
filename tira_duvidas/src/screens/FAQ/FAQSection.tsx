import React from 'react';
import styles from './FAQSection.module.css';
import FAQItem from './FAQItem';

const categories = ['Categoria1', 'Categoria2', 'Categoria3', 'Categoria4', 'Categoria5'];

const faqItems = [
  {
    title: 'Título da Pergunta 1',
    description: 'Descrição da pergunta bem detalhada com muitos detalhes mesmo, que vai ficar ao lado da imagem padrão ou a anexada pelo usuário',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/97b5ec677b6e996709eb5071b86bb54d347ed5b6ce6d9a506ea19b193938df05?placeholderIfAbsent=true&apiKey=d8d70c15437f46d9988865cdfeffad08'
  },
  {
    title: 'Título da Pergunta 2',
    description: 'Outra descrição detalhada de uma pergunta frequente.',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/97b5ec677b6e996709eb5071b86bb54d347ed5b6ce6d9a506ea19b193938df05?placeholderIfAbsent=true&apiKey=d8d70c15437f46d9988865cdfeffad08'
  },
  {
    title: 'Título da Pergunta 3',
    description: 'Mais uma pergunta com uma explicação extensa para os usuários.',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/97b5ec677b6e996709eb5071b86bb54d347ed5b6ce6d9a506ea19b193938df05?placeholderIfAbsent=true&apiKey=d8d70c15437f46d9988865cdfeffad08'
  },
  {
    title: 'Título da Pergunta 4',
    description: 'Pergunta quatro, que deve responder algo importante.',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/97b5ec677b6e996709eb5071b86bb54d347ed5b6ce6d9a506ea19b193938df05?placeholderIfAbsent=true&apiKey=d8d70c15437f46d9988865cdfeffad08'
  },
  {
    title: 'Título da Pergunta 5',
    description: 'Descrição da quinta pergunta, com mais detalhes técnicos.',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/97b5ec677b6e996709eb5071b86bb54d347ed5b6ce6d9a506ea19b193938df05?placeholderIfAbsent=true&apiKey=d8d70c15437f46d9988865cdfeffad08'
  },
  {
    title: 'Título da Pergunta 6',
    description: 'Sexta pergunta, ainda mais informações relevantes para o usuário.',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/97b5ec677b6e996709eb5071b86bb54d347ed5b6ce6d9a506ea19b193938df05?placeholderIfAbsent=true&apiKey=d8d70c15437f46d9988865cdfeffad08'
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className={styles.faqContainer}>
      {/* Adiciona a barra de categorias */}
      <header className={styles.categoryBar}>
        <nav className={styles.categoryList}>
          {categories.map((category, index) => (
            <a key={index} href={`#${category.toLowerCase()}`} className={styles.categoryItem}>
              {category}
            </a>
          ))}
        </nav>
      </header>

      {/* Título da seção de FAQ */}
      <h2 className={styles.faqTitle}>Dúvidas Frequentes</h2>

      {/* Grid de FAQ com 3 colunas e linhas dinâmicas */}
      <div className={styles.faqGrid}>
        {faqItems.map((item, index) => (
          <div key={index} className={styles.faqColumn}>
            <FAQItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
