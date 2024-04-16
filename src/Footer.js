import React from "react";

function Footer({ items }) {
  let completedItem = items.filter((item) => item.isChecked).length;
  return (
    <div>
      <center>
        <h3>
          You have {items.length} items in your list, and you already completed{" "}
          {completedItem}.
        </h3>
      </center>
    </div>
  );
}

export default Footer;
