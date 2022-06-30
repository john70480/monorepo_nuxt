import { shallowRef, watch } from 'vue';

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export async function apiComputed<Args extends readonly any[], T>(
  api: (...args: Writeable<Args>) => Promise<T>,
  getArgs: () => Args,
  onUpdate?: () => void,
) {

  watch(getArgs, async () => {
    data.value = await api(...getArgs());
    onUpdate?.();
  }, { flush: 'post' });

  const data = shallowRef(await api(...getArgs()));
  return data;
}
