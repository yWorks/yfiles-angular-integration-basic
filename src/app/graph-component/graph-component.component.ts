import { type AfterViewInit, Component, type ElementRef, ViewChild } from '@angular/core'
import { GraphComponent, GraphEditorInputMode, type IGraph, License, Point, Rect } from '@yfiles/yfiles'
import licenseData from '../../license.json'

License.value = licenseData

@Component({
  selector: 'app-graph-component',
  templateUrl: './graph-component.component.html',
  styleUrls: ['./graph-component.component.css'],
})
export class GraphComponentComponent implements AfterViewInit {
  @ViewChild('graphComponentRef') graphComponentRef!: ElementRef
  graphComponent!: GraphComponent

  ngAfterViewInit(): void {
    if (!this.graphComponent) {
      // instantiate a new GraphComponent once
      this.graphComponent = this.initializeGraphComponent()
    }
    // center the newly created graph
    void this.graphComponent.fitGraphBounds()
  }

  initializeGraphComponent(): GraphComponent {
    const graphComponent = new GraphComponent(this.graphComponentRef.nativeElement)
    // configure an input mode for out of the box editing
    graphComponent.inputMode = new GraphEditorInputMode()
    // create some graph elements
    this.createSampleGraph(graphComponent.graph)
    return graphComponent
  }

  createSampleGraph(graph: IGraph): void {
    // create some nodes
    const node1 = graph.createNodeAt(new Point(30, 30))
    const node2 = graph.createNodeAt(new Point(150, 30))
    const node3 = graph.createNode(new Rect(230, 200, 60, 30))

    // create some edges between the nodes
    graph.createEdge(node1, node2)
    graph.createEdge(node1, node3)
    const edge = graph.createEdge(node2, node3)
    // Creates the first bend for edge at (260, 30)
    graph.addBend(edge, new Point(260, 30))

    // add labels to some graph elements
    graph.addLabel(node1, 'n1')
    graph.addLabel(node2, 'n2')
    graph.addLabel(node3, 'n3')
  }
}
