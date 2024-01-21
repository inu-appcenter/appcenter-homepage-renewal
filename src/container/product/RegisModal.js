export default function RegisModal() {
    return (
        <div>
            <ModalContainer
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel='Product Modal'
            >
                <div>
                    <figure>
                        <AppImage src={imageData[0]} />
                    </figure>
                    <AppTitle>{appData.title}</AppTitle>
                    <AppDescription>{appData.subTitle}</AppDescription>
                    {appData.appleStoreLink && (
                        <InstallBtn
                            href={appData.appleStoreLink}
                            target='_blank'
                            rel='noreferrer'
                        >
                            iOS
                        </InstallBtn>
                    )}
                    {appData.androidStoreLink && (
                        <InstallBtn
                            href={appData.androidStoreLink}
                            target='_blank'
                            rel='noreferrer'
                        >
                            Android
                        </InstallBtn>
                    )}
                    <DetailInfo>{appData.body}</DetailInfo>
                    <DetailImage src={imageData[1]} />
                    <DetailImage src={imageData[2]} />
                    <DetailImage src={imageData[3]} />
                </div>
            </ModalContainer>
        </div>
    );
}
