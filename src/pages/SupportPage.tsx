import { memo, type FC } from "react";
import useTheme from "../hooks/useTheme";
import { EMAIL } from "../constants";

const SupportPage: FC = memo(() => {
  const theme = useTheme();

  const textStyle = {
    fontSize: theme.scale(14),
    marginBottom: theme.spacing(4),
  };

  const sectionHeaderStyle = {
    color: theme.colors.primary,
    fontSize: theme.scale(18),
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    textTransform: "uppercase" as const,
  };

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "auto",
        marginTop: 0,
        color: theme.colors.font,
        padding: theme.spacing(6),
        lineHeight: 1.6,
      }}
    >
      <h1
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(24),
          textTransform: "uppercase",
          marginBottom: theme.spacing(4),
        }}
      >
        Mission Support
      </h1>

      <p style={textStyle}>
        Having trouble navigating the void? Whether you've encountered a glitch
        in the system or have feedback on your spaceship, the{" "}
        <strong style={{ color: theme.colors.primary }}>Void Voyagers</strong>{" "}
        command center is here to help.
      </p>

      <h2 style={sectionHeaderStyle}>1. Technical Support</h2>
      <p style={textStyle}>
        If you are experiencing crashes, performance issues, or bugs, please
        include your
        <strong> device model</strong> and <strong>iOS version</strong> in your
        report. This helps us calibrate the engines and get you back into orbit
        faster.
      </p>

      <h2 style={sectionHeaderStyle}>2. Frequently Asked Questions</h2>
      <div style={{ marginBottom: theme.spacing(4) }}>
        <p
          style={{
            ...textStyle,
            fontWeight: "bold",
            marginBottom: theme.spacing(1),
          }}
        >
          "I lost my progress. Can I recover it?"
        </p>
        <p style={textStyle}>
          Void Voyagers saves your progress locally and via iCloud. Ensure you
          are signed into your Apple ID to keep your upgrades synced across
          devices.
        </p>

        <p
          style={{
            ...textStyle,
            fontWeight: "bold",
            marginBottom: theme.spacing(1),
          }}
        >
          "The game is lagging on my device."
        </p>
        <p style={textStyle}>
          Try closing background apps or lowering your device's power-save
          settings. Void Voyagers is optimized for modern iOS hardware.
        </p>
      </div>

      <h2 style={sectionHeaderStyle}>3. Feedback & Suggestions</h2>
      <p style={textStyle}>
        We are constantly evolving the universe. If you have ideas for new
        modular components, or cosmic events, we want to hear them!
      </p>

      <h2 style={sectionHeaderStyle}>4. Contact Us</h2>
      <p style={textStyle}>
        For direct assistance, please reach out via email at{" "}
        <a href={`mailto:${EMAIL}`} style={{ color: theme.colors.primary }}>
          {EMAIL}
        </a>
        . We aim to respond to all distress signals within 48 hours.
      </p>
    </div>
  );
});

export default SupportPage;
