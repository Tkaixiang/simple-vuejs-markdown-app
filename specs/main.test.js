import { mount } from "@vue/test-utils";
import App from './../src/App.vue';
import store from "../src/store";
import { describe, expect, test } from "vitest";

describe('App.vue', () => {
    test('Renders reset buton', () => {
        const wrapper = mount(App, {
            global: {
                plugins: [store]
            }
        })

        const button = wrapper.get('button')
        expect(button.exists()).toBe(true)
    })
})