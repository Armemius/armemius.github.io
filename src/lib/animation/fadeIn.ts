export interface FadeInOptions {
  threshold?: number;
  duration?: number;
}

export function fadeIn(
  node: HTMLElement,
  { threshold = 0.1, duration = 400 }: FadeInOptions = {}
): SvelteActionReturnType {
  const handleIntersect = ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (entry.isIntersecting) {
      node.style.transition = `opacity ${duration}ms ease-out`;
      node.style.opacity = '';
      observer.disconnect();
    }
  };

  node.style.opacity = '0';

  const observer = new IntersectionObserver(handleIntersect, { threshold });
  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
