import { BODY, GREEN } from "./marketTheme";

/** Shared responsive layout for /markets sections */
export default function MarketsPageStyles() {
  return (
    <style>{`
      .markets-page {
        width: 100%;
        max-width: 100%;
        overflow-x: clip;
        box-sizing: border-box;
      }

      .markets-page .markets-section-inner {
        width: 100%;
        max-width: min(1400px, 100%);
        margin-left: auto;
        margin-right: auto;
        min-width: 0;
      }

      .markets-serving-grid,
      .markets-local-cities-grid,
      .markets-us-states-grid,
      .markets-us-cities-grid {
        display: grid;
        width: 100%;
        min-width: 0;
        align-items: start;
      }

      .markets-serving-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: clamp(28px, 4.2vw, 64px);
        row-gap: clamp(16px, 2.4vw, 32px);
      }

      .markets-serving-grid--primary {
        max-width: min(720px, 100%);
        margin-left: auto;
        margin-right: auto;
      }

      .markets-serving-grid--extended {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .markets-serving-cell,
      .markets-local-cities-cell,
      .markets-us-state-link,
      .markets-us-city-cell {
        min-width: 0;
      }

      .markets-serving-label,
      .markets-local-cities-label,
      .markets-us-state-link span,
      .markets-us-city-cell span {
        min-width: 0;
        word-break: break-word;
      }

      .markets-serving-cell--primary .markets-serving-label {
        font-weight: 600;
        color: ${GREEN};
      }

      .markets-local-cities-cell--plain {
        padding-left: 0 !important;
      }

      .markets-local-cities-cell--link {
        text-decoration: none;
        color: ${BODY};
        transition: color 0.2s ease, opacity 0.2s ease;
      }

      .markets-local-cities-cell--link:hover {
        color: ${GREEN};
        opacity: 0.88;
      }

      .markets-local-cities-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        column-gap: clamp(24px, 3.5vw, 48px);
        row-gap: clamp(8px, 1.5vw, 16px);
      }

      .markets-us-states-grid {
        grid-template-columns: repeat(5, minmax(0, 1fr));
        column-gap: clamp(20px, 3vw, 40px);
        row-gap: clamp(8px, 1.2vw, 14px);
      }

      .markets-us-cities-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        column-gap: clamp(24px, 3.5vw, 48px);
        row-gap: clamp(8px, 1.5vw, 16px);
      }

      .markets-us-state-link {
        text-decoration: none;
        color: rgba(22, 45, 36, 0.9);
        transition: color 0.15s ease;
      }

      .markets-us-state-link:hover {
        color: ${GREEN};
      }

      .markets-us-city-cell {
        padding-left: 0 !important;
      }

      .markets-local-group h3 {
        flex-wrap: wrap;
      }

      @media (max-width: 1100px) {
        .markets-serving-grid--extended {
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        }

        .markets-local-cities-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        }

        .markets-us-states-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        }

        .markets-us-cities-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        }
      }

      @media (max-width: 900px) {
        .markets-us-states-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        }
      }

      @media (max-width: 640px) {
        .markets-page .markets-serving-section,
        .markets-page .markets-local-cities-section,
        .markets-page .markets-us-section {
          padding-left: clamp(16px, 5vw, 24px) !important;
          padding-right: clamp(16px, 5vw, 24px) !important;
          padding-top: clamp(44px, 10vw, 56px) !important;
          padding-bottom: clamp(48px, 11vw, 64px) !important;
        }

        .markets-serving-grid,
        .markets-serving-grid--extended,
        .markets-local-cities-grid,
        .markets-us-states-grid,
        .markets-us-cities-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          column-gap: clamp(16px, 4vw, 24px) !important;
          row-gap: clamp(10px, 2.5vw, 16px) !important;
        }

        .markets-serving-subhead {
          font-size: clamp(1rem, 4.2vw, 1.2rem) !important;
        }
      }

      @media (max-width: 480px) {
        .markets-serving-grid--primary {
          grid-template-columns: 1fr !important;
          max-width: min(320px, 100%);
        }
      }

      @media (max-width: 400px) {
        .markets-serving-grid--extended,
        .markets-local-cities-grid,
        .markets-us-states-grid,
        .markets-us-cities-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  );
}
