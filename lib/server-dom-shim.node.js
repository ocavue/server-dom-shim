import {
  CustomElementRegistry as CustomElementRegistryShim,
  Element as ElementShim,
  HTMLElement as HTMLElementShim,
  customElements as customElementsShim,
} from '@lit-labs/ssr-dom-shim'

const MaybeElementShim =
  (typeof globalThis !== 'undefined' && typeof globalThis.Element) ||
  (typeof window !== 'undefined' && typeof window.Element) ||
  ElementShim

const MaybeHTMLElementShim =
  (typeof globalThis !== 'undefined' && typeof globalThis.HTMLElement) ||
  (typeof window !== 'undefined' && typeof window.HTMLElement) ||
  HTMLElementShim

const MaybeCustomElementRegistryShim =
  (typeof globalThis !== 'undefined' &&
    typeof globalThis.CustomElementRegistry) ||
  (typeof window !== 'undefined' && typeof window.CustomElementRegistry) ||
  CustomElementRegistryShim

const maybeCustomElementsShim =
  (typeof globalThis !== 'undefined' && typeof globalThis.customElements) ||
  (typeof window !== 'undefined' && typeof window.customElements) ||
  customElementsShim

export {
  MaybeCustomElementRegistryShim as CustomElementRegistry,
  MaybeElementShim as Element,
  MaybeHTMLElementShim as HTMLElement,
  maybeCustomElementsShim as customElements,
}
