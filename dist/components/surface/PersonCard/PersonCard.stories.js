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
import PersonCard from './PersonCard';
var meta = {
    title: 'Surface/PersonCard',
    component: PersonCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: [
                'Jane Doe',
                'John Smith',
                'Alex Ray',
                'Chris Green',
                'Sam Wilson',
                'Carlos Silva',
            ],
        },
        title: { control: 'object' },
        avatarUrl: { control: 'text' },
        socials: { control: 'object' },
        showAvatar: { control: 'boolean' },
        elevation: {
            control: { type: 'range', min: 0, max: 24, step: 1 },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
        padding: {
            control: 'select',
            options: [0, 1, 1.5, 2, 3, 4],
            description: 'Substitui o padding padrão do card (multiplicador do tema).',
        },
        backgroundColor: {
            control: 'color',
            description: 'Define a cor de fundo do card.',
        },
    },
};
export default meta;
export var Default = {
    name: 'Padrão',
    args: {
        name: 'Jane Doe',
        title: ['Engenheira de Software'],
        avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        socials: [
            { network: 'linkedin', url: 'https://linkedin.com' },
            { network: 'github', url: 'https://github.com' },
        ],
    },
};
export var AllSocials = {
    name: 'Com Todas as Redes Sociais',
    args: __assign(__assign({}, Default.args), { name: 'John Smith', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705e', socials: [
            { network: 'linkedin', url: 'https://linkedin.com' },
            { network: 'github', url: 'https://github.com' },
            { network: 'twitter', url: 'https://twitter.com' },
            { network: 'website', url: 'https://example.com' },
        ] }),
};
export var WithAvatarFallback = {
    name: 'Com Avatar de Fallback',
    args: {
        name: 'Alex Ray',
        title: ['Designer de UX/UI'],
        avatarUrl: '', // URL vazia mostra o fallback
        socials: [{ network: 'website', url: 'https://example.com' }],
    },
};
export var WithoutAvatar = {
    name: 'Sem Componente Avatar',
    args: {
        name: 'Chris Green',
        title: ['Product Manager'],
        showAvatar: false,
        socials: [{ network: 'linkedin', url: 'https://linkedin.com' }],
    },
};
export var NoSocials = {
    name: 'Sem Redes Sociais',
    args: __assign(__assign({}, Default.args), { name: 'Sam Wilson', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706f', socials: [] }),
};
export var WithoutShadow = {
    name: 'Sem Sombra',
    args: __assign(__assign({}, Default.args), { elevation: 0 }),
};
export var WithTwoTitles = {
    name: 'Com Dois Títulos',
    args: __assign(__assign({}, Default.args), { name: 'Carlos Silva', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026708e', title: ['Arquiteto de Soluções', 'Especialista em Cloud'] }),
};
export var WithMultipleTitles = {
    name: 'Com Múltiplos Títulos',
    args: __assign(__assign({}, Default.args), { name: 'Maria Souza', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026707d', title: ['Desenvolvedora Full-Stack', 'Mentora de Carreira', 'Palestrante'] }),
};
export var LargeSize = {
    name: 'Tamanho Grande',
    args: __assign(__assign({}, Default.args), { size: 'large', name: 'Dr. Evelyn Reed', title: ['Diretora de Pesquisa'], avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026709f' }),
};
export var SmallSize = {
    name: 'Tamanho Pequeno',
    args: __assign(__assign({}, Default.args), { size: 'small', name: 'Leo Barnes', title: ['Estagiário'], avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026710a' }),
};
export var WithCustomPadding = {
    name: 'Com Padding Customizado',
    args: __assign(__assign({}, Default.args), { padding: 0, name: 'No Padding' }),
};
export var WithCustomBackgroundColor = {
    name: 'Com Cor de Fundo Customizada',
    args: __assign(__assign({}, Default.args), { backgroundColor: 'rgba(224, 247, 250, 0.8)', name: 'Colored Card' }),
};
