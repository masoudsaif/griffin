import { memo, type FC } from "react";
import useTheme from "../hooks/useTheme";

const PrivacyPolicyPage: FC = memo(() => {
  const theme = useTheme();

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
        }}
      >
        Privacy Policy
      </h1>

      <p style={{ fontSize: theme.scale(14) }}>
        Effective Date: [Month Day, Year]
      </p>

      <p style={{ fontSize: theme.scale(14) }}>
        Your privacy is important to us. This Privacy Policy explains what data
        is collected by <strong>Void Voyagers</strong>, how it is used, and your
        rights regarding that information.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        1. Information We Collect
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        <strong>Void Voyagers</strong> does <strong>not</strong> directly
        collect, store, or transmit any personal information. We do not request
        registration, email addresses, or location data.
      </p>
      <p style={{ fontSize: theme.scale(14) }}>
        However, limited non-personal data may be collected automatically by
        Apple’s App Store and Apple Analytics, such as:
      </p>
      <ul style={{ fontSize: theme.scale(14), marginLeft: theme.spacing(6) }}>
        <li>App usage statistics (downloads, sessions, crashes)</li>
        <li>Device type and operating system version</li>
        <li>General region (e.g., country or language settings)</li>
      </ul>
      <p style={{ fontSize: theme.scale(14) }}>
        This information is aggregated and anonymized. We only have access to
        summary reports provided by Apple and cannot identify individual users.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        2. How We Use This Information
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        Analytics data helps us understand how the game performs — for example,
        to see if it crashes frequently or runs well on most devices. This
        allows us to improve gameplay quality and performance.
      </p>
      <p style={{ fontSize: theme.scale(14) }}>
        We do not sell, rent, or share any data with third parties.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        3. Third-Party Services
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        <strong>Void Voyagers</strong> relies solely on Apple’s App Store for
        distribution, analytics, and crash reporting. Any data collected through
        these services is subject to Apple’s own privacy policies:
      </p>
      <p style={{ fontSize: theme.scale(14) }}>
        <a
          href="https://www.apple.com/legal/privacy/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.colors.primary }}
        >
          https://www.apple.com/legal/privacy/
        </a>
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        4. Children’s Privacy
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        <strong>Void Voyagers</strong> is intended for a general audience and
        does not knowingly collect personal data from children under 13 (or the
        minimum age required by law in your region).
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        5. Security
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        Since the game does not collect or store personal data, there are no
        user accounts or external servers to secure. All analytics data remains
        within Apple’s secure ecosystem.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        6. Changes to This Policy
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        We may update this Privacy Policy periodically to reflect improvements
        or changes in how <strong>Void Voyagers</strong> operates. Updates will
        be posted within the app or on the official website if applicable.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        7. Contact
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        If you have questions or concerns about this Privacy Policy, please
        contact us at <strong>[your email address]</strong>.
      </p>
    </div>
  );
});

export default PrivacyPolicyPage;
