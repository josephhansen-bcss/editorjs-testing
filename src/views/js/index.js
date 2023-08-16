const editor = new EditorJS({
    holder: 'editorjs',
    data: {},
    readOnly: false,
    placeholder: '',
    onChange : () => {
        editor.save().then((outputData) => {
            parseToHTML(outputData)
        })
    },
    onReady: () => {
        new Undo({
            editor
        });
        new DragDrop(editor);
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
        hyperlink: {
            class: Hyperlink,
            config: {
              shortcut: 'CMD+SHIFT+L',
              validate: true,
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
            inlineToolbar: true,
        },
        embed: Embed,
        AnyButton: {
            class: AnyButton,
            inlineToolbar: false,
        },
    }
})

const edjsParser = edjsHTML()

function parseToHTML(data) {
    let html = edjsParser.parse(data)
    html = html.join('')
    sessionStorage.setItem('current-blog-data', html)
}
