"use client";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import ReactQuill to avoid SSR issues (document is not defined)
const ReactQuill = dynamic(() => import("react-quill-new"), {
    ssr: false,
    loading: () => <div>Loading editor...</div>,
});
import "react-quill-new/dist/quill.snow.css";

const TextEditor = ({ value, onChange }) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }, { size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            [{ align: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }],
            ["blockquote", "code-block"],
            ["link"],
            ["clean"], // ✅ Keep in toolbar, just remove from formats
        ],
    };

    const formats = [
        "header",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "color",
        "background",
        "script",
        "align",
        "list",
        "indent",
        "blockquote",
        "code-block",
        "link",
    ];

    return (
        <div className="p-2">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                placeholder="Type your content here..."
                className="h-[100px]  border-red-600 "
                style={{ height: "600px" }}
            />
        </div>
    );
};

export default TextEditor;
