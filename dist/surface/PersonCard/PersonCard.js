var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Avatar, Typography, Box, IconButton, } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
// Mapeia o nome da rede para o componente de ícone correspondente
var socialIconMap = {
    linkedin: _jsx(LinkedInIcon, {}),
    github: _jsx(GitHubIcon, {}),
    twitter: _jsx(TwitterIcon, {}),
    website: _jsx(LanguageIcon, {}),
};
var sizeStyles = {
    'xx-small': {
        avatar: { width: 40, height: 40 },
        nameVariant: 'subtitle2',
        titleVariant: 'caption',
        contentPadding: 1,
        titleMinHeight: '2.8rem',
        avatarMarginBottom: 1,
        titleContainerMarginBottom: 0.5,
        socialsMarginTop: 1,
    },
    'x-small': {
        avatar: { width: 50, height: 50 },
        nameVariant: 'subtitle1',
        titleVariant: 'caption',
        contentPadding: 1.5,
        titleMinHeight: '3.2rem',
        avatarMarginBottom: 1.5,
        titleContainerMarginBottom: 1,
        socialsMarginTop: 1.5,
    },
    small: {
        avatar: { width: 60, height: 60 },
        nameVariant: 'h6',
        titleVariant: 'caption',
        contentPadding: 1.5,
        titleMinHeight: '3.74rem',
        avatarMarginBottom: 1.5,
        titleContainerMarginBottom: 1,
        socialsMarginTop: 1.5,
    },
    medium: {
        avatar: { width: 80, height: 80 },
        nameVariant: 'h5',
        titleVariant: 'body2',
        contentPadding: 3,
        titleMinHeight: '3.76rem',
        avatarMarginBottom: 2,
        titleContainerMarginBottom: 1.5,
        socialsMarginTop: 2,
    },
    large: {
        avatar: { width: 100, height: 100 },
        nameVariant: 'h4',
        titleVariant: 'body1',
        contentPadding: 4,
        titleMinHeight: '4.5rem',
        avatarMarginBottom: 2.5,
        titleContainerMarginBottom: 2,
        socialsMarginTop: 2.5,
    },
};
var PersonCard = function (_a) {
    var name = _a.name, title = _a.title, avatarUrl = _a.avatarUrl, _b = _a.socials, socials = _b === void 0 ? [] : _b, _c = _a.showAvatar, showAvatar = _c === void 0 ? true : _c, _d = _a.elevation, elevation = _d === void 0 ? 1 : _d, _e = _a.size, size = _e === void 0 ? 'medium' : _e, padding = _a.padding, backgroundColor = _a.backgroundColor, // Mantido para retrocompatibilidade
    sx = _a.sx, rest = __rest(_a, ["name", "title", "avatarUrl", "socials", "showAvatar", "elevation", "size", "padding", "backgroundColor", "sx"]);
    var styles = sizeStyles[size];
    var finalPadding = padding !== null && padding !== void 0 ? padding : styles.contentPadding;
    return (_jsx(Card, __assign({ elevation: elevation, sx: __spreadArray([
            {
                maxWidth: 345,
                textAlign: 'center',
                // Define 'transparent' como padrão, mas permite que seja sobrescrito pela prop `sx`.
                backgroundColor: 'transparent',
            }
        ], (Array.isArray(sx) ? sx : [sx]), true) }, rest, { children: _jsxs(CardContent, { sx: { display: 'flex', flexDirection: 'column', alignItems: 'center', p: finalPadding, '&:last-child': { pb: finalPadding } }, children: [showAvatar && (_jsx(Avatar, { alt: name, src: avatarUrl, sx: __assign(__assign({}, styles.avatar), { mb: styles.avatarMarginBottom }) })), name && (_jsx(Typography, { variant: styles.nameVariant, component: "div", children: name })), title && title.length > 0 && (_jsx(Box, { sx: { minHeight: styles.titleMinHeight, display: 'flex', flexDirection: 'column', justifyContent: 'center', mb: styles.titleContainerMarginBottom }, children: title.slice(0, 3).map(function (t, index) { return (_jsx(Typography, { color: "text.secondary", variant: styles.titleVariant, children: t }, index)); }) })), socials.length > 0 && (_jsx(Box, { sx: { mt: styles.socialsMarginTop }, children: socials.map(function (social) { return (_jsx(IconButton, { component: "a", href: social.url, target: "_blank", rel: "noopener noreferrer", "aria-label": "".concat(name, "'s ").concat(social.network), children: socialIconMap[social.network] }, social.network)); }) }))] }) })));
};
export default PersonCard;
