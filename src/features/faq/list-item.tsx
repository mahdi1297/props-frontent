import { useEffect, useRef, useState } from "react";
import "./style.scss";
import { FAQItem } from "./types";
import { IconProfileEdit } from "UI/icons";

export const ListItem = ({ item }: { item: FAQItem }) => {
  const [isTitleEditable, setIsTitleEditable] = useState(false);
  const [isAnswerEditable, setIsAnswerEditable] = useState(false);

  const inputRef = useRef<any>();
  const textareaRef = useRef<any>();

  useEffect(() => {
    inputRef?.current?.focus();
  }, [isTitleEditable]);

  useEffect(() => {
    textareaRef?.current?.focus();
  }, [isAnswerEditable]);

  return (
    <div className="faq__list-item">
      <div className="faq__head font-md text-dark d-flex align-center gap-24">
        <span
          className={`${isTitleEditable ? "__active-edit" : "transparent"}`}
          onClick={() => {
            setIsTitleEditable((prev) => !prev);
            inputRef?.current?.focus();
          }}
        >
          {IconProfileEdit}
        </span>
        <p
          style={{
            display: isTitleEditable ? "none" : "block",
          }}
        >
          {item.title}
        </p>
        <input
          className={`${isTitleEditable ? "__active-edit" : "transparent"}`}
          style={{
            display: !isTitleEditable ? "none" : "block",
          }}
          ref={inputRef}
          type="text"
          defaultValue={item.title}
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === "Escape") {
              inputRef?.current?.blur();
              setIsTitleEditable((prev) => !prev);
            }
          }}
          //   onClick={}
        />
      </div>
      <div className="faq__body d-flex align-center gap-24">
        <span
          className={`${isAnswerEditable ? "__active-edit" : "transparent"}`}
          onClick={() => {
            setIsAnswerEditable((prev) => !prev);
          }}
        >
          {IconProfileEdit}
        </span>
        <div className="w-100">
          <p
            style={{
              display: isAnswerEditable ? "none" : "block",
            }}
            className="font-sm text-dark"
          >
            {item.answer}
          </p>
          <textarea
            className={`${isAnswerEditable ? "__active-edit" : "transparent"}`}
            style={{
              display: !isAnswerEditable ? "none" : "block",
            }}
            ref={textareaRef}
            onClick={() => {
              textareaRef?.current?.focus();
            }}
            defaultValue={item.answer}
            onKeyUp={(e) => {
              if (e.key === "Escape") {
                inputRef?.current?.blur();
                setIsTitleEditable((prev) => !prev);
              }
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
