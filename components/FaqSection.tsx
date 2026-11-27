import React from "react";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
  open?: boolean;
}

export interface FaqSectionProps {
  heading: React.ReactNode;
  description?: React.ReactNode;
  items?: FaqItem[];
  children?: React.ReactNode;
  band?: boolean;
  id?: string;
  className?: string;
}

export default function FaqSection({
  heading,
  description,
  items,
  children,
  band = false,
  id = "faq",
  className = "",
}: FaqSectionProps) {
  const sectionClass = `section-spacing${band ? " section-band" : ""}${className ? ` ${className}` : ""
    }`;

  return (
    <section className={sectionClass} id={id}>
      <div className="container faq-layout">
        <div>
          {typeof heading === "string" ? <h2>{heading}</h2> : heading}
          {description &&
            (typeof description === "string" ? (
              <p>{description}</p>
            ) : React.isValidElement(description) &&
              (description.type === "p" || description.type === "div") ? (
              description
            ) : (
              <p>{description}</p>
            ))}
        </div>
        <div className="faq">
          {items
            ? items.map((item, index) => {
              const isOpen =
                item.open !== undefined ? item.open : index === 0;
              return (
                <details key={index} open={isOpen ? true : undefined}>
                  <summary>{item.question}</summary>
                  {typeof item.answer === "string" ? (
                    <p>{item.answer}</p>
                  ) : React.isValidElement(item.answer) &&
                    (item.answer.type === "p" ||
                      item.answer.type === "div") ? (
                    item.answer
                  ) : (
                    <p>{item.answer}</p>
                  )}
                </details>
              );
            })
            : children}
        </div>
      </div>
    </section>
  );
}
