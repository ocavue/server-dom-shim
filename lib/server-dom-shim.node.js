import {
  CustomElementRegistry as CustomElementRegistryShim,
  Element as ElementShim,
  HTMLElement as HTMLElementShim,
  customElements as customElementsShim,
} from '@lit-labs/ssr-dom-shim'

const MaybeElementShim =
  (typeof globalThis !== 'undefined' && globalThis.Element) ||
  (typeof window !== 'undefined' && window.Element) ||
  ElementShim

const MaybeHTMLElementShim =
  (typeof globalThis !== 'undefined' && globalThis.HTMLElement) ||
  (typeof window !== 'undefined' && window.HTMLElement) ||
  HTMLElementShim

const MaybeCustomElementRegistryShim =
  (typeof globalThis !== 'undefined' &&
    typeof globalThis.CustomElementRegistry) ||
  (typeof window !== 'undefined' && window.CustomElementRegistry) ||
  CustomElementRegistryShim

const maybeCustomElementsShim =
  (typeof globalThis !== 'undefined' && globalThis.customElements) ||
  (typeof window !== 'undefined' && window.customElements) ||
  customElementsShim

export {
  MaybeCustomElementRegistryShim as CustomElementRegistry,
  MaybeElementShim as Element,
  MaybeHTMLElementShim as HTMLElement,
  maybeCustomElementsShim as customElements,
}
