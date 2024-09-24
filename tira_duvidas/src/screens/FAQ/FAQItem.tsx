import React from 'react';
import styles from './FAQSection.module.css';

interface FAQItemProps {
  title: string;
  description: string;
  imageSrc: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ title, description, imageSrc }) => {
  return (
    <article className={styles.faqItem}>
      <h3 className={styles.faqItemTitle}>{title}</h3>
      <div className={styles.faqItemContent}>
        <img loading="lazy" src={imageSrc} alt="" className={styles.faqItemImage} />
        <p className={styles.faqItemDescription}>{description}</p>
      </div>
    </article>
  );
};

export default FAQItem;