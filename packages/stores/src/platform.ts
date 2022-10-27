import sha1 from 'sha1';
import { defineStore } from 'pinia';
import { reactive, computed, toRefs } from 'vue';

export const usePlatform = defineStore('platform', () => {
  const config = useRuntimeConfig();
  // state
  const state = reactive({
    isEncrypt: config.TG_IS_ENCRYPT || false,
    encrypt: undefined as {
      token: string,
      key: string,
      iv: string,
    } | undefined,
    _ip: '0.0.0.0',
  });

  // getters
  const vga = computed(() => {
    const canvas = document.createElement('canvas');
    const webgl = canvas.getContext('experimental-webgl');
    const info = webgl.getExtension('WEBGL_debug_renderer_info');
    return webgl.getParameter(info.UNMASKED_RENDERER_WEBGL);
  });
  const uuid = computed<string>(() => {
    const uuid = sha1(`${vga.value}${deviceInfo.value}`);
    return uuid;
  });
  const deviceInfo = computed(() => {
    return navigator.userAgent;
  });
  const domain = computed(() => {
    return window.location.hostname;
  });

  const ip = computed<Promise<string>>(async () => {
    if (state._ip === '0.0.0.0') {
      const { data, pending, error, refresh } = await useFetch('https://api.ipify.org?format=json')
      state._ip = data.value.ip
    }
    return state._ip;
  })


  return {
    ...toRefs(state),
    vga,
    uuid,
    deviceInfo,
    domain,
    ip
  };

  // actions

});
