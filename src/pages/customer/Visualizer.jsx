import { useState, useContext } from 'react';
import { Info } from 'lucide-react';
import { ProductContext } from '../../context/ProductContext';
import { PRODUCT_CATEGORIES, TILE_TYPES, ROOM_TEMPLATES } from '../../utils/constants';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const Visualizer = () => {
  const { products } = useContext(ProductContext);
  const [selectedRoom, setSelectedRoom] = useState(ROOM_TEMPLATES.BATHROOM);
  const [selectedTile, setSelectedTile] = useState(null);

  const tiles = products.filter(p => p.category === PRODUCT_CATEGORIES.TILES);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">3D Room Visualizer</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Visualize how different tiles will look in your space. Select a room and apply tiles to see them in action.
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-blue-900">
              <strong>Note:</strong> This is a simplified 2D visualizer. Select a room template and a tile to preview the combination.
              For full 3D visualization with Three.js, additional development is required.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Room Selection */}
            <Card>
              <h2 className="text-xl font-bold mb-4">Select Room</h2>
              <div className="space-y-2">
                {Object.entries(ROOM_TEMPLATES).map(([key, value]) => (
                  <button
                    key={value}
                    onClick={() => setSelectedRoom(value)}
                    className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors ${
                      selectedRoom === value
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </button>
                ))}
              </div>
            </Card>

            {/* Tile Selection */}
            <Card>
              <h2 className="text-xl font-bold mb-4">Select Tile</h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {tiles.slice(0, 10).map((tile) => (
                  <button
                    key={tile.id}
                    onClick={() => setSelectedTile(tile)}
                    className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors flex items-center gap-3 ${
                      selectedTile?.id === tile.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={tile.images[0]}
                      alt={tile.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{tile.name}</p>
                      <p className="text-xs text-gray-500">{tile.size}</p>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {selectedTile && (
              <Card>
                <h3 className="font-semibold mb-2">Selected Tile</h3>
                <p className="text-sm text-gray-600 mb-2">{selectedTile.name}</p>
                <p className="text-sm text-gray-600">Size: {selectedTile.size}</p>
                <p className="text-sm text-gray-600">Color: {selectedTile.color}</p>
                <p className="text-sm text-gray-600">Finish: {selectedTile.finish}</p>
              </Card>
            )}
          </div>

          {/* Visualization Area */}
          <div className="lg:col-span-2">
            <Card padding="sm">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Room Template Preview */}
                <div className="absolute inset-0">
                  {selectedRoom === ROOM_TEMPLATES.BATHROOM && (
                    <div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🛁</div>
                        <p className="text-gray-600 font-medium">Bathroom View</p>
                      </div>
                    </div>
                  )}
                  {selectedRoom === ROOM_TEMPLATES.KITCHEN && (
                    <div className="w-full h-full bg-gradient-to-b from-orange-100 to-orange-50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🍳</div>
                        <p className="text-gray-600 font-medium">Kitchen View</p>
                      </div>
                    </div>
                  )}
                  {selectedRoom === ROOM_TEMPLATES.LIVING_ROOM && (
                    <div className="w-full h-full bg-gradient-to-b from-green-100 to-green-50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🏠</div>
                        <p className="text-gray-600 font-medium">Living Room View</p>
                      </div>
                    </div>
                  )}

                  {/* Tile Overlay */}
                  {selectedTile && (
                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-white bg-opacity-90 rounded-lg">
                      <div className="flex items-center gap-4">
                        <img
                          src={selectedTile.images[0]}
                          alt={selectedTile.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div>
                          <p className="font-semibold">{selectedTile.name}</p>
                          <p className="text-sm text-gray-600">Applied to {selectedRoom}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-6 space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">How to use:</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                    <li>Select a room template from the left sidebar</li>
                    <li>Browse and select a tile design</li>
                    <li>See how the tile looks in the selected room</li>
                    <li>Try different combinations to find your perfect match</li>
                  </ol>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => {
                      setSelectedRoom(ROOM_TEMPLATES.BATHROOM);
                      setSelectedTile(null);
                    }}
                    variant="outline"
                  >
                    Reset
                  </Button>
                  {selectedTile && (
                    <Button onClick={() => window.open(`/products/${selectedTile.id}`, '_blank')}>
                      View Product Details
                    </Button>
                  )}
                </div>
              </div>
            </Card>

            {/* Future Enhancement Notice */}
            <Card className="mt-6 bg-gradient-to-r from-primary-50 to-blue-50">
              <h3 className="font-semibold mb-2">🚀 Coming Soon: Full 3D Experience</h3>
              <p className="text-sm text-gray-700">
                We're working on an immersive 3D visualization experience using Three.js that will allow you to:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                <li>Rotate and zoom the 3D room view</li>
                <li>Apply different tiles to walls and floors separately</li>
                <li>Adjust lighting and view angles</li>
                <li>Save and share your designs</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
