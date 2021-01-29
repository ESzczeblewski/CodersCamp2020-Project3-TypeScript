export default class uiEngine {
  name: string;
  constructor(
    private readonly canvas: HTMLCanvasElement ) {}

  public init() {
    this.createOverlay(this.canvas);
  }

  private createOverlay(cnv: HTMLCanvasElement) {

    const overlay = document.createElement('div');

    overlay.style.width = `${cnv.width}px`;
    overlay.style.height = `${cnv.height}px`;

    return document.body.appendChild(overlay);

  };

  private createHeading() {

    const heading = document.createElement('h1');
    // heading.textContent = this.settings.name;
    return heading;

  }

  private createPlayButton(event: string, callback: Function) {

    const playBtn = document.createElement('button');

    playBtn.addEventListener(event, callback());

    return playBtn;
  }
}