from sklearn.datasets import fetch_openml
from sklearn.neural_network import MLPClassifier
import joblib

# Load data from https://www.openml.org/d/554
X, y = fetch_openml("mnist_784", version=1, return_X_y=True, as_frame=False)
X = X / 255.0

# Train a simple MLP classifier
mlp = MLPClassifier(hidden_layer_sizes=(50,), max_iter=10, alpha=1e-4,
                    solver='sgd', verbose=10, random_state=1,
                    learning_rate_init=.1)

mlp.fit(X, y)

# Save the model
joblib.dump(mlp, 'src/models/mnist_model.joblib')
