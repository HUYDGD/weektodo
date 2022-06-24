export default {
    donateList(vue) {
        return [
            {
                name: vue.$t('donate.contribute'),
                ico: "bi-heart-fill", color: "#d94242",
                linktype: "external",
                link: "https://support.weektodo.me"
            },
            {name: vue.$t('donate.shareWithFriends'), ico: "bi-share-fill", color: "#4297d9", linktype: "tagId", link: 'shareTab'},
            {name: vue.$t('donate.rate'), ico: "bi-star-half", color: "#d0b114", linktype: "tagId", link: 'rateTab'},
            {
                name: vue.$t('donate.translate'),
                color: "#676767",       
                ico: "bi-globe",
                linktype: "external",
                link: "https://github.com/Zuntek/WeekToDoWeb#translations"
            }
        ]
    },
    rateList() {
        return [
            {
                name: "AlternativeTo",
                img: "icons/alternativeto.png",
                linktype: "external",
                link: "https://alternativeto.net/software/weektodo/about/"
            },
            {
                name: "ProductHunt",
                img: "icons/product-hunt.svg",
                linktype: "external",
                link: "https://www.producthunt.com/posts/weektodo"
            },
            {
                name: "SaaSHub",
                img: "icons/SaaSHub.png",
                linktype: "external",
                link: "https://www.saashub.com/weektodo-reviews/new"
            },
        ]
    },
    shareList(vue) {
        return [
            {
                name: "Facebook",
                ico: "bi-facebook",
                color: "#4b6cad",
                linktype: "external",
                link: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fweektodo.me%2F"
            },
            {
                name: "Twitter",
                ico: "bi-twitter",
                color: "#3eafda",
                linktype: "external",
                link: "https://twitter.com/intent/tweet?text=".concat('',vue.$t('donate.shareMessage'),"  https://weektodo.me")
            },
            {
                name: "Linkedin",
                ico: "bi-linkedin",
                color: "#1a77af",
                linktype: "external",
                link: "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fweektodo.me"
            },
            {
                name: "Reddit",
                ico: "bi-reddit",
                color: "#ed4f1c",
                linktype: "external",
                link: "https://www.reddit.com/submit?title=".concat("",vue.$t('donate.shareMessage'),"&url=https%3A%2F%2Fweektodo.me%2F")
            }
        ]
    }
}