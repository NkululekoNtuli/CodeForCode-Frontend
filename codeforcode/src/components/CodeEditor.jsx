import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, setCode, language = "java" }) {
    return (
        <div style={{ height: "400px", border: "1px solid #ccc" }}>
            <Editor
                height="100%"
                defaultLanguage={language}
                value={code}
                onChange={(value) => setCode(value)}
            />
        </div>
    );
}
