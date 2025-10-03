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
import { jsx as _jsx } from "react/jsx-runtime";
import PersonCard from '../PersonCard/PersonCard';
import { Box } from '@mui/material';
var sizeStyles = {
    'xx-small': {
        titleVariant: 'subtitle1',
        gap: 1, // theme.spacing(1) = 8px
        memberWidth: '150px',
    },
    'x-small': {
        titleVariant: 'h6',
        gap: 1.5, // theme.spacing(1.5) = 12px
        memberWidth: '160px',
    },
    small: {
        titleVariant: 'h6',
        gap: 2, // theme.spacing(2) = 16px
        memberWidth: '175px',
    },
    medium: {
        titleVariant: 'h5',
        gap: 3, // theme.spacing(3) = 24px
        memberWidth: '200px',
    },
    large: {
        titleVariant: 'h4',
        gap: 4, // theme.spacing(4) = 32px
        memberWidth: '250px',
    },
};
var generateShadow = function (elevation) {
    if (elevation <= 0) {
        return 'none';
    }
    var clampedElevation = Math.max(0, Math.min(elevation, 30));
    var yOffset = Math.round(clampedElevation / 2);
    var blur = Math.round(clampedElevation * 1.5);
    return "0px ".concat(yOffset, "px ").concat(blur, "px rgba(0, 0, 0, 0.2)");
};
var TeamCard = function (_a) {
    var members = _a.members, membersContainerStyle = _a.membersContainerStyle, memberGap = _a.memberGap, _b = _a.teamElevation, teamElevation = _b === void 0 ? 0 : _b, _c = _a.membersElevation, membersElevation = _c === void 0 ? 0 : _c, membersPadding = _a.membersPadding, membersSx = _a.membersSx, _d = _a.justifyMembers, justifyMembers = _d === void 0 ? 'flex-start' : _d, _e = _a.size, size = _e === void 0 ? 'medium' : _e, style = _a.style, sx = _a.sx, props = __rest(_a, ["members", "membersContainerStyle", "memberGap", "teamElevation", "membersElevation", "membersPadding", "membersSx", "justifyMembers", "size", "style", "sx"]);
    var styles = sizeStyles[size];
    return (_jsx(Box, __assign({ style: style, sx: __spreadArray([
            {
                display: 'flex',
                flexDirection: 'column',
                padding: styles.gap,
                borderRadius: '4px',
                boxShadow: generateShadow(teamElevation),
                gap: styles.gap, // Adiciona espaçamento entre o título e os membros
            }
        ], (Array.isArray(sx) ? sx : [sx]), true) }, props, { children: _jsx(Box, { style: membersContainerStyle, sx: {
                display: 'flex',
                flexWrap: 'wrap',
                gap: memberGap !== null && memberGap !== void 0 ? memberGap : styles.gap,
                justifyContent: justifyMembers,
            }, children: members.map(function (member, index) { return (_jsx(Box, { sx: {
                    flexBasis: styles.memberWidth,
                    minWidth: styles.memberWidth,
                }, children: _jsx(PersonCard, __assign({}, member, { size: size, elevation: membersElevation, padding: membersPadding, sx: membersSx })) }, "".concat(member.name, "-").concat(index))); }) }) })));
};
export default TeamCard;
