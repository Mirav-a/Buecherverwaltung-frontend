import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BookItem from "../BookItem.vue";

describe("BookItem.vue", () => {
  it("renders book information properly", () => {
    const book = { title: "Der Herr der Ringe", author: "J.R.R. Tolkien" };
    const wrapper = mount(BookItem, { props: { book } });

    expect(wrapper.text()).toContain("Der Herr der Ringe");
    expect(wrapper.text()).toContain("J.R.R. Tolkien");
  });

  it("renders default message when book is null", () => {
    const wrapper = mount(BookItem, {
      props: { book: null as unknown as Record<string, any> }, // Typcast erzwingen
    });

    expect(wrapper.text()).toContain("Keine Buchdaten verfügbar");
  });

  it("renders default message when book is not provided", () => {
    const wrapper = mount(BookItem);

    expect(wrapper.text()).toContain("Keine Buchdaten verfügbar");
  });
});
