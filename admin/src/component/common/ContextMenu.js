export default function ContextMenu() {
    const [contextMenuVisible, setContextMenuVisible] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({
        x: 0,
        y: 0,
    });
    const contextMenuRef = useRef(null);

    return (
        <>
            {contextMenuVisible && (
                <ContextMenu
                    ref={contextMenuRef}
                    style={{
                        top: contextMenuPosition.y,
                        left: contextMenuPosition.x,
                    }}
                >
                    <MenuItem onClick={openEditModal}>수정</MenuItem>
                    <MenuItem onClick={handleDelete}>삭제</MenuItem>
                </ContextMenu>
            )}
        </>
    );
}

const ContextMenu = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    color: grey;
`;
