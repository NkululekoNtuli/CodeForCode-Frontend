import { useState } from "react";
import CodeEditor from "./CodeEditor";
import { submitCode } from "../api";

export default function ChallengePanel() {
    const [code, setCode] = useState("// write your code here");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const res = await submitCode({
                userId: 1,
                challengeId: 101,
                language: "java",
                code: code,
            });
            setOutput(res.data.output || "Submitted successfully!");
        } catch (err) {
            setOutput("Error submitting code: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: "800px", margin: "auto" }}>
            <h2>🧩 Coding Challenge</h2>
            <p>Write a function that returns the factorial of a number.</p>

            <CodeEditor code={code} setCode={setCode} />

            <button onClick={handleSubmit} disabled={loading}>
                {loading ? "Submitting..." : "Submit Code"}
            </button>

            <pre style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}>
                {output}
            </pre>
        </div>
    );
}
