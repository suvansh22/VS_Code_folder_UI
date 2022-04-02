import { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { DiJsBadge, DiCss3Full, DiHtml5 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";

export default function Folder({ data, setFileName }) {
  const [expand, setExpand] = useState(false);
  const fileIcons = {
    json: VscJson,
    css: DiCss3Full,
    html: DiHtml5,
    js: DiJsBadge
  };
  const FileIcon = fileIcons[data?.name?.split(".")?.[1] ?? "js"];
  const onClickHandler = () => {
    setExpand((prev) => !prev);
  };
  if (data.isFolder) {
    return (
      <div>
        <span
          onClick={onClickHandler}
          style={{
            backgroundColor: expand ? "#DDDDDD" : "inherit",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "5px"
          }}
        >
          {expand ? (
            <FaFolderOpen style={{ marginRight: "10px", color: "#00b4d8" }} />
          ) : (
            <FaFolder style={{ marginRight: "10px", color: "#00b4d8" }} />
          )}
          {data.name}
        </span>
        {data.items.map((folder) => (
          <span
            key={folder.name}
            style={{
              display: expand ? "block" : "none",
              margin: "10px"
            }}
          >
            <Folder data={folder} setFileName={setFileName} />
          </span>
        ))}
      </div>
    );
  }
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        padding: "5px",
        cursor: "pointer"
      }}
      onClick={() =>
        setFileName((prev) => (prev === data.name ? "" : data.name))
      }
    >
      <FileIcon style={{ marginRight: "10px", color: "yellow" }} />
      {data.name}
    </span>
  );
}
