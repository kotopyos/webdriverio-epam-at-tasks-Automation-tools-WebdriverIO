describe("Bring it in", () => {


    it("Pastebin script 2nd task", async () => {
        await browser.url("https://pastebin.com/");

        const cookiesAgreeEl = await $("//*[@id='qc-cmp2-ui']/div[2]/div/button[2]"); // Cookies agree button
        if (cookiesAgreeEl.isDisplayed()) {
            cookiesAgreeEl.click();
        }

        await $("textarea[id='postform-text']").setValue(`git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force`);
        await $("//*[@id='select2-postform-format-container']").click(); // dropdown menu Syntax Highlighting
        await $("//li[text()='Bash']").click(); // selecting Bash syntax
        await $("//*[@id='select2-postform-expiration-container']").click(); // dropdown menu Paste expiration
        await $("/html/body/span[2]/span/span[2]/ul/li[3]").click(); // selecting 10 minutes
        await $("input[id='postform-name']").setValue("how to gain dominance among developers"); // setting title
        await $("//button[text()='Create New Paste']").click();



        
        const syntaxHighlighting = await $("a.h_800:nth-child(1)");
        const pasteText = await $("//ol[@class='bash']");
        
        const pageTitle = await browser.getTitle();   

        await expect(pageTitle).toEqual("how to gain dominance among developers - Pastebin.com"); 
        await expect(await syntaxHighlighting.getText()).toEqual("Bash"); 
        await expect(await pasteText).toHaveText(`git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force`);

    })
})