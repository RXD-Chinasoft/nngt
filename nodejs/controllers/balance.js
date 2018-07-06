module.exports = {
    indexPage: async (ctx) => {
        const title = "balance page"
        await ctx.render("balance", {
            title
        })
    }
}