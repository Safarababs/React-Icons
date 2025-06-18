import { forwardRef } from "react";
import { iconsByCategory } from "./Icons";

const thStyle = {
  padding: "8px",
  textAlign: "left",
  borderBottom: "2px solid #ccc",
};
const tdStyle = {
  padding: "8px",
  verticalAlign: "top",
};

const tableBgColors = [
  "#e3f0ff", // Dev & Code
  "#f0eaff", // Social Media
  "#eafff3", // Map & Location
  "#fffbe3", // Navigation & UI
  "#ffe3e3", // Communication
  "#e3fff9", // File & Media
  "#f3e3ff", // Settings & Tools
  "#e3f7ff", // E-commerce
  "#f9e3ff", // User & Account
  "#e3ffe7", // Analytics & Dashboard
  "#fff3e3", // Miscellaneous
];

const DetailedIconSheet = forwardRef((_, ref) => (
  <div ref={ref} style={{ fontFamily: "Segoe UI", padding: "2rem" }}>
    <h1
      style={{
        textAlign: "center",
        margin: "0 0 0.3rem 0",
        fontSize: "2.5rem",
        fontWeight: 900,
        letterSpacing: "2px",
        background: "linear-gradient(90deg, #4f8cff 0%, #6f6fff 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "0 2px 8px rgba(79,140,255,0.10)",
        // paddingTop: "1.5rem",
      }}
    >
      <span role="img" aria-label="sparkles">
        ✨
      </span>{" "}
      React Icons Reference{" "}
      <span role="img" aria-label="sparkles">
        ✨
      </span>
    </h1>
    <h3
      style={{
        color: "red",
        textTransform: "uppercase",
        textAlign: "center",
      }}
    >
      <strong>
        <span>How To Add Icons In Your React Projects?</span>
      </strong>
    </h3>
    <p>
      Are you a developer who constantly finds yourself Googling This reference
      guide was crafted just for you. Whether you're building dashboards,
      designing login flows, or crafting mobile-friendly UIs, icons are
      essential to modern web development—and hunting down the right one
      shouldn't slow you down. This PDF serves as your ready-to-use vault of
      popular React Icons, complete with previews, import statements, usage
      examples, and practical descriptions. Just copy, paste, and keep
      building—no more tab-hopping or code guessing.
    </p>

    <section
      style={{
        margin: "2.5rem auto 2rem auto",
        maxWidth: 700,
        background: "linear-gradient(90deg, #f0f4ff 0%, #e8f0fe 100%)",
        borderRadius: 14,
        boxShadow: "0 2px 12px rgba(79,140,255,0.07)",
        padding: "2rem",
        fontSize: 15,
      }}
    >
      <h2
        style={{
          color: "#4f8cff",
          fontWeight: 800,
          marginBottom: "1rem",
          letterSpacing: "1px",
        }}
      >
        🚀 How to Install and Use React Icons in Your Project
      </h2>
      <ol style={{ paddingLeft: 20 }}>
        <li style={{ marginBottom: "1rem" }}>
          <b>Install the library:</b>
          <pre
            style={{
              background: "#232946",
              color: "#fff",
              borderRadius: 6,
              padding: "0.7rem 1rem",
              margin: "0.5rem 0",
              fontSize: 14,
              overflowX: "auto",
            }}
          >
            npm install react-icons
          </pre>
          <span style={{ fontSize: 13, color: "#555" }}>or</span>
          <pre
            style={{
              background: "#232946",
              color: "#fff",
              borderRadius: 6,
              padding: "0.7rem 1rem",
              margin: "0.5rem 0",
              fontSize: 14,
              overflowX: "auto",
            }}
          >
            yarn add react-icons
          </pre>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <b>Import an icon:</b>
          <pre
            style={{
              background: "#232946",
              color: "#fff",
              borderRadius: 6,
              padding: "0.7rem 1rem",
              margin: "0.5rem 0",
              fontSize: 14,
              overflowX: "auto",
            }}
          >
            import {"{ FaGithub }"} from 'react-icons/fa';
          </pre>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <b>Use the icon in JSX:</b>
          <pre
            style={{
              background: "#232946",
              color: "#fff",
              borderRadius: 6,
              padding: "0.7rem 1rem",
              margin: "0.5rem 0",
              fontSize: 14,
              overflowX: "auto",
            }}
          >
            {`<FaGithub size={32} color="#333" />`}
          </pre>
        </li>
        <li>
          <b>Find more icons:</b>
          <div style={{ marginTop: 6 }}>
            Browse all icons at:{" "}
            <a
              href="https://react-icons.github.io/react-icons/"
              style={{ color: "#4f8cff", textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://react-icons.github.io/react-icons/
            </a>
          </div>
        </li>
      </ol>
      <div style={{ marginTop: "1.5rem", fontSize: 13, color: "#555" }}>
        <b>Tip:</b> You can import icons from many sets (FontAwesome, Material,
        Bootstrap, etc.) using their respective prefixes (e.g., <code>Fa</code>{" "}
        for FontAwesome, <code>Md</code> for Material).
      </div>
    </section>

    <h2>Use Cases by Category</h2>
    <p>
      Here are use cases for different categories. Download all references by
      clicking the{" "}
      <span style={{ color: "red" }}>Download button at the bottom.</span>
    </p>

    {iconsByCategory.map((cat, i) => (
      <div key={i} style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ margin: "1.5rem 0 0.5rem 0" }}>{cat.category}</h2>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: 13,
              background: tableBgColors[i % tableBgColors.length], // Assign background
              borderRadius: 12,
              boxShadow: "0 2px 8px rgba(79,140,255,0.06)",
            }}
          >
            <thead>
              <tr style={{ background: "#f0f0f0" }}>
                <th style={thStyle}>Icon</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Import</th>
                <th style={thStyle}>JSX Example</th>
              </tr>
            </thead>
            <tbody>
              {cat.icons.map((entry, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={tdStyle}>{entry.icon}</td>
                  <td style={tdStyle}>
                    <code>{entry.name}</code>
                  </td>
                  <td style={tdStyle}>
                    <code>{entry.importLine}</code>
                  </td>
                  <td style={tdStyle}>
                    <code>{entry.example}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
    <footer style={{ marginTop: "3rem", fontSize: 11, textAlign: "center" }}>
      <p
        style={{
          textAlign: "center",
          fontSize: 16,
          color: "#4f8cff",
          marginBottom: "2rem",
          fontWeight: 500,
          letterSpacing: "1px",
          fontStyle: "italic",
          textShadow: "0 1px 4px #e0e7ff",
        }}
      >
        Created by Safar Abbas &bull; {new Date().toLocaleDateString()}
      </p>
    </footer>
  </div>
));

export default DetailedIconSheet;
