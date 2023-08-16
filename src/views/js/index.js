const editor = new EditorJS({
    holder: 'editorjs',
    data: {},
    readOnly: false,
    placeholder: '',

    onReady: () => {
        new Undo({
            editor
        });
    },
    tools: {
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
        },
        checklist: Checklist,
        list: {
            class: NestedList,
            inlineToolbar: true,
            config: {
                defaultStyle: 'unordered'
            },
        },
        linkTool: {
            class: LinkTool,
            config: {
                endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
            }
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: 'Quote\'s author',
            },
        },
        header: {
            class: Header,
            inlineToolbar: true,
            config: {
                placeholder: 'Enter a header',
                levels: [1, 2, 3, 4, 5],
                defaultLevel: 2,
                defaultAlignment: 'left'
            }
        },
        toggle: {
            class: ToggleBlock,
            inlineToolbar: true,
        },
        image: SimpleImage,
        table: {
            class: Table,
        },
        AnyButton: {
            class: AnyButton,
            inlineToolbar: false,
        },
    }
})
