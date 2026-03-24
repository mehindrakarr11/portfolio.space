/**
 * Shared layout + typography classes for consistent hierarchy (editorial / product polish).
 */

export const sectionShell =
  "relative px-5 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-28 lg:py-36";

export const sectionInner = "mx-auto w-full max-w-7xl";

/** Kicker — always above a section H2 */
export const eyebrow =
  "mb-4 text-[0.6875rem] font-semibold uppercase leading-normal tracking-[0.22em] text-neutral-500 dark:text-neutral-500 sm:text-xs";

/** Primary section title */
export const heading2 =
  "max-w-[42rem] text-pretty text-[1.625rem] font-semibold leading-[1.12] tracking-[-0.028em] text-neutral-950 dark:text-white sm:text-3xl sm:leading-[1.1] lg:text-4xl lg:leading-[1.08]";

/** Optional subtitle / lead under H2 */
export const lead =
  "mt-5 max-w-xl text-pretty text-[0.9375rem] font-normal leading-[1.65] text-neutral-600 dark:text-neutral-400 sm:text-base sm:leading-[1.7]";

/** Space between heading block and main section content */
export const blockGap = "mt-14 sm:mt-16 lg:mt-20";

/** Hero-only container alignment with sections */
export const heroInner =
  "relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-16";

export const heroEyebrow =
  "mb-5 text-[0.6875rem] font-semibold uppercase leading-normal tracking-[0.24em] text-neutral-500 dark:text-neutral-500 sm:text-xs";

export const heroTitle =
  "hero-display max-w-[min(22ch,100%)] text-pretty text-[clamp(2.75rem,6vw+1.25rem,4.875rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-neutral-950 dark:text-white";

export const heroLead =
  "mt-7 max-w-[min(36rem,100%)] text-pretty text-[1.0625rem] font-normal leading-[1.6] text-neutral-600 dark:text-neutral-400 sm:text-xl sm:leading-[1.55]";

export const heroMeta =
  "mt-14 max-w-xl border-t border-black/[0.06] pt-8 text-sm font-normal leading-[1.65] text-neutral-500 dark:border-white/[0.08] dark:text-neutral-500 sm:text-[0.9375rem]";

/** Card titles (project / panel) */
export const cardTitle =
  "text-lg font-semibold leading-snug tracking-[-0.02em] text-neutral-950 dark:text-white";

export const cardBody =
  "mt-3 flex-1 text-sm font-normal leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-[0.9375rem] sm:leading-[1.65]";

/** Skill panel category label */
export const skillGroupLabel =
  "text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-500 sm:text-xs";
