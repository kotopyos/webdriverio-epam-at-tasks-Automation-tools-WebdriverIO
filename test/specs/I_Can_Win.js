describe("I Can Win", () => {


    it("Pastebin script 1st task", async () => {
        await browser.url("https://pastebin.com/");
        
        const cookiesAgreeEl = await $("//*[@id='qc-cmp2-ui']/div[2]/div/button[2]"); // Cookies agree button
        if (cookiesAgreeEl.isDisplayed()) {
        cookiesAgreeEl.click();
    }
        
        await $("textarea[id='postform-text']").setValue("Hello from WebDriver");
        await $("//*[@id='select2-postform-expiration-container']").click();
        await $("/html/body/span[2]/span/span[2]/ul/li[3]").click();
        await $("input[id='postform-name']").setValue("helloweb");
        await $("//button[text()='Create New Paste']").click();



        const createdPaste = await $("//div[@class='de1']");   // Doublecheck if the paste was really created        
        // await createdPaste.waitForDisplayed();
        expect(await createdPaste.getText()).toEqual("Hello from WebDriver"); 
    })
})