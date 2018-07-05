module.exports = {
    indexPage: async (ctx) => {
        const title = "admin page"
        await ctx.render("admin", {
            title
        })
    }
}