use wasm_bindgen::prelude::*;
use nlpo3::tokenizer::{newmm,tokenizer_trait};
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}