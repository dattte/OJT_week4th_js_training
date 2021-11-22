# Practice 01
- Let's create a menu that fixed 2 generation like this images at
```
./imgs/shallow-menu
```

## Menu structure
![](./imgs/shallow-menu/structure.png "")

## `fold` mode (not hover to any item)
![](./imgs/shallow-menu/menu-fold.png "")

## `expand` mode (hove to an item), hover to `Dashboard`
![](./imgs/shallow-menu/menu-hover-dashboard.png "")

## Hover to `Sales`
![](./imgs/shallow-menu/menu-hover-sales.png "")

## Click to an item, (click to `Dashboard`) then all children of `Dashboard` will be show. Click again, all children will be hiden
![](./imgs/shallow-menu/menu-dashboard-click.png "")

## Click to `Users`
![](./imgs/shallow-menu/menu-users-click.png "")

## Hover to child menu, EX hover to a item in `Users`:
![](./imgs/shallow-menu/menu-user-click-hover-item.png "")

## Note
- Don't use HTML, you need to use all js to draw menu
- See menu structure at `./menu/shallow.js`
- Try to add animation & effect

# Practice 02
- Let's create a dynamic menu like this image in this folder: `imgs/deep-menu`

## Menu structure
![](./imgs/deep-menu/structure.png "")

## `fold` mode (not hover to any item)
![](./imgs/deep-menu/nothing.png "")

## hover to home
![](./imgs/deep-menu/hover-home.png "")

## hover to news
![](./imgs/deep-menu/hover-news.png "")

## hover to blog
![](./imgs/deep-menu/hover-blog.png "")

## hover to blog, then hover to missions
![](./imgs/deep-menu/hover-blog-mission.png "")

## hover to blog, then hover to missions, then hover to our team
![](./imgs/deep-menu/hover-blog-our-team.png "")

## hover to blog, then hover to missions, then hover to our team, then hover to any person you want
![](./imgs/deep-menu/hover-blog-our-team-gleb.png "")

## Lưu ý
- Don't use HTML, you need to use all js to draw menu
- Item be hovered need in orange
- Each parent menu (generation 1) that is not active state (is not current page, `isActive = true`) that will be displayed like `ABOUT US`
- Try to add animation
- See menu structure at `./menu/deep.js`
- Try to add animation

# Practice 03
- Lets create a array that a timeline list
- After that, lets create a timeline using the array that you was created in previous step
- This is expected result
![](./imgs/timeline/vertical-timeline.png "")