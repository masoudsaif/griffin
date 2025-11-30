import { memo, type FC } from "react";
import useTheme from "../hooks/useTheme";

const TermsAndConditionsPage: FC = memo(() => {
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
        Terms and Conditions
      </h1>

      <p style={{ fontSize: theme.scale(14) }}>
        Effective Date: [Month Day, Year]
      </p>

      <p style={{ fontSize: theme.scale(14) }}>
        Welcome to <strong>Void Voyagers</strong>, a mobile game developed and
        published by [Your Name or Studio Name] (“we,” “our,” or “us”). By
        downloading, installing, or playing the game, you agree to the following
        Terms and Conditions. Please read them carefully.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        1. Acceptance of Terms
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        By accessing or using <strong>Void Voyagers</strong>, you agree to be
        bound by these Terms and all applicable laws. If you do not agree,
        please do not use the game.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        2. License
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        We grant you a limited, non-exclusive, non-transferable, revocable
        license to play <strong>Void Voyagers</strong> for personal
        entertainment only. You may not copy, modify, distribute,
        reverse-engineer, or sell any part of the game without our prior written
        consent.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        3. Intellectual Property
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        All artwork, code, sounds, music, and other creative assets in{" "}
        <strong>Void Voyagers</strong> are owned by [Your Name or Studio Name]
        and are protected by applicable copyright and trademark laws.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        4. User Conduct
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        You agree not to use the game in any unlawful manner or to attempt to
        disrupt or exploit its systems. Cheating, modification of assets, or
        tampering with the app or analytics is strictly prohibited.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        5. Disclaimer of Warranties
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        <strong>Void Voyagers</strong> is provided “as is” without any warranty
        of any kind, express or implied. We do not guarantee that the game will
        be error-free or available without interruption.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        6. Limitation of Liability
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        To the maximum extent permitted by law, [Your Name or Studio Name] shall
        not be liable for any damages arising from your use of the game,
        including but not limited to loss of data, device malfunction, or other
        indirect damages.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        7. Updates and Modifications
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        We may update or modify the game and these Terms at any time. Continued
        use of the game after updates constitutes acceptance of the new Terms.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        8. Governing Law
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        These Terms are governed by the laws of [Your Country or State], without
        regard to conflict-of-law principles.
      </p>

      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.scale(18),
          marginTop: theme.spacing(6),
        }}
      >
        9. Contact
      </h2>
      <p style={{ fontSize: theme.scale(14) }}>
        If you have any questions about these Terms, please contact us at{" "}
        <strong>[your email address]</strong>.
      </p>
    </div>
  );
});

export default TermsAndConditionsPage;
