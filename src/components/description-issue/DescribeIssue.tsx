import { useState, useRef, useEffect } from "react";

interface DescribeProps {
  longText: string;
}

const DescribeIssue: React.FC<DescribeProps> = ({ longText }) => {
  // button state
  const [expanded, setExpanded] = useState(false);
  const [setshowButton, setSetShowButton] = useState(false);

  // ref for the text height
  const ref = useRef<HTMLParagraphElement>(null);

  // listen to the text changes
  useEffect(() => {
    if (ref.current) {
      setSetShowButton(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  }, []);

  return (
    <div>
      <p className={expanded ? "" : "expend-text"} ref={ref}>
        {longText}
      </p>
      {setshowButton && (
        <button
          className="read-more-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default DescribeIssue;
