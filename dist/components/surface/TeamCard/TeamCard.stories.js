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
import TeamCard from './TeamCard';
import { Box } from '@mui/material';
var meta = {
    title: 'Surface/TeamCard',
    component: TeamCard,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        members: { control: 'object' },
        membersContainerStyle: { control: 'object' },
        memberGap: {
            control: 'select',
            options: ['0px', '4px', '8px', '16px', '32px'],
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
        justifyMembers: {
            control: 'select',
            options: [
                'flex-start',
                'center',
                'flex-end',
                'space-between',
                'space-around',
                'space-evenly',
            ],
        },
        membersElevation: {
            control: { type: 'range', min: 0, max: 30, step: 1 },
            description: 'Controla a elevação (sombra) de todos os cards de membro.',
        },
        teamElevation: {
            control: { type: 'range', min: 0, max: 30, step: 1 },
            description: 'Controla a elevação (sombra) do container do time.',
        },
        membersPadding: {
            control: 'select',
            options: [0, 1, 1.5, 2, 3, 4],
            description: 'Substitui o padding de todos os cards de membro.',
        },
    },
};
export default meta;
var programmers = [
    {
        name: 'Jane Doe',
        title: ['Engenheira de Software Sênior'],
        avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        socials: [
            { network: 'linkedin', url: 'https://linkedin.com' },
            { network: 'github', url: 'https://github.com' },
        ],
    },
    {
        name: 'John Smith',
        title: ['Desenvolvedor Frontend'],
        avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705e',
        socials: [
            { network: 'github', url: 'https://github.com' },
            { network: 'twitter', url: 'https://twitter.com' },
        ],
    },
];
var consultants = [
    {
        name: 'Alex Ray',
        title: ['Consultor de UX'],
        avatarUrl: '',
        socials: [{ network: 'website', url: 'https://example.com' }],
    },
    {
        name: 'Sam Wilson',
        title: ['Consultor de Negócios'],
        avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706f',
        socials: [],
    },
    {
        name: 'Chris Green',
        title: ['Consultor de Acessibilidade'],
        showAvatar: false,
        socials: [{ network: 'linkedin', url: 'https://linkedin.com' }],
    },
];
var orientadores = [
    {
        name: 'Dr. Alan Grant',
        title: ['Professor de Paleontologia'],
        avatarUrl: 'https://i.pravatar.cc/150?u=alan_grant',
        socials: [{ network: 'linkedin', url: 'https://linkedin.com' }],
    },
    {
        name: 'Dra. Ellie Sattler',
        title: ['Paleobotânica'],
        avatarUrl: 'https://i.pravatar.cc/150?u=ellie_sattler',
        socials: [{ network: 'website', url: 'https://example.com' }],
    },
];
var apoio = [
    {
        name: 'Ian Malcolm',
        title: [], // Sem título
        avatarUrl: 'https://i.pravatar.cc/150?u=ian_malcolm',
        socials: [], // Sem redes sociais
    },
    {
        name: 'John Hammond',
        title: [], // Sem título
        avatarUrl: 'https://i.pravatar.cc/150?u=john_hammond',
        socials: [], // Sem redes sociais
    },
];
var programmersWithoutAvatar = programmers.map(function (member) { return (__assign(__assign({}, member), { showAvatar: false })); });
var consultantsWithoutAvatar = consultants.map(function (member) { return (__assign(__assign({}, member), { showAvatar: false })); });
var singleTeamArgs = {
    members: programmers,
};
export var Default = {
    name: 'Padrão (Interativo)',
    args: __assign({}, singleTeamArgs),
};
export var LargeSize = {
    name: 'Tamanho Grande',
    args: __assign(__assign({}, singleTeamArgs), { size: 'large' }),
};
export var SmallSize = {
    name: 'Tamanho Pequeno',
    args: __assign(__assign({}, singleTeamArgs), { size: 'small' }),
};
export var LargeTeam = {
    name: 'Time Grande',
    args: {
        members: consultants,
    },
};
export var EmptyTeam = {
    name: 'Time Vazio',
    args: {
        members: [],
    },
};
export var CustomMemberGap = {
    name: 'Com Espaçamento de Membro Customizado',
    args: __assign(__assign({}, singleTeamArgs), { memberGap: '32px' }),
};
export var WithMembersElevation = {
    name: 'Com Elevação nos Membros',
    args: __assign(__assign({}, singleTeamArgs), { membersElevation: 4 }),
};
export var WithCustomMemberPadding = {
    name: 'Com Padding de Membro Customizado',
    args: __assign(__assign({}, singleTeamArgs), { membersPadding: 0 }),
};
export var WithTeamElevation = {
    name: 'Com Elevação no Time',
    args: __assign(__assign({}, singleTeamArgs), { teamElevation: 4 }),
};
export var WithCustomBackgroundColor = {
    name: 'Com Cor de Fundo Customizada',
    args: __assign(__assign({}, singleTeamArgs), { sx: {
            backgroundColor: 'rgba(232, 245, 255, 0.8)',
        }, teamElevation: 2 }),
};
export var MultipleTeams = {
    name: 'Múltiplos Times',
    argTypes: {
        teamGap: {
            control: 'select',
            options: ['0px', '4px', '8px', '16px', '32px'],
            description: 'Espaçamento entre múltiplos TeamCards (controlado no container pai).',
        },
    },
    render: function (args) {
        var teamGap = args.teamGap, teamCardArgs = __rest(args, ["teamGap"]);
        return (_jsxs(Box, { sx: {
                display: 'flex',
                flexDirection: 'column',
                gap: teamGap,
                width: '100%',
            }, children: [_jsx(TeamCard, __assign({}, teamCardArgs, { members: programmers })), _jsx(TeamCard, __assign({}, teamCardArgs, { members: consultants }))] }));
    },
    args: {
        teamGap: '32px',
        size: 'medium',
    },
    parameters: {},
};
export var TwoTeamsFlexStart = {
    name: 'Duas Equipes em Linha (Flex Start)',
    render: function (args) { return (_jsxs(Box, { sx: { display: 'flex', gap: 2, justifyContent: 'flex-start', width: '100%', flexWrap: 'wrap' }, children: [_jsx(TeamCard, __assign({}, args, { members: programmers })), _jsx(TeamCard, __assign({}, args, { members: consultants }))] })); },
    args: {
        size: 'medium',
    },
    parameters: {},
};
export var TeamsWithoutAvatars = {
    name: 'Times Sem Avatares (Flex End)',
    render: function (args) { return (_jsxs(Box, { sx: { display: 'flex', gap: 2, justifyContent: 'flex-end', width: '100%' }, children: [_jsx(TeamCard, __assign({}, args, { members: programmersWithoutAvatar })), _jsx(TeamCard, __assign({}, args, { members: consultantsWithoutAvatar }))] })); },
    args: {
        size: 'medium',
    },
    parameters: {},
};
export var SideBySideTeams = {
    name: 'Times Lado a Lado',
    render: function (args) { return (_jsxs(Box, { sx: { display: 'flex', gap: 2, alignItems: 'flex-start', p: 2 }, children: [_jsx(Box, { sx: { flex: 1 }, children: _jsx(TeamCard, __assign({}, args, { members: programmers })) }), _jsx(Box, { sx: { flex: 1 }, children: _jsx(TeamCard, __assign({}, args, { members: consultants })) })] })); },
    args: {
        size: 'medium',
    },
    parameters: {
        layout: 'fullscreen',
    },
};
export var SingleRowLayout = {
    name: 'Layout em Linha Única',
    args: {
        members: __spreadArray(__spreadArray([], programmers, true), consultants, true),
        membersContainerStyle: {
            flexDirection: 'row',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            paddingBottom: '16px',
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
};
export var ThreeColumnLayout = {
    name: 'Layout de Três Colunas',
    render: function (args) { return (_jsxs(Box, { sx: { display: 'flex', gap: 2, alignItems: 'flex-start', p: 2 }, children: [_jsx(Box, { sx: { flex: 1 }, children: _jsx(TeamCard, __assign({}, args, { members: [programmers[0]] })) }), _jsx(Box, { sx: { flex: 1 }, children: _jsx(TeamCard, __assign({}, args, { members: orientadores })) }), _jsx(Box, { sx: { flex: 1 }, children: _jsx(TeamCard, __assign({}, args, { members: apoio })) })] })); },
    args: {
        size: 'medium',
    },
    parameters: {
        layout: 'fullscreen',
    },
};
